import _Media from "../../models/media.model";
import uploadFile from "../../middleware/upload.middleware";
import dbConfig from "../../db/config";
import { MongoClient } from "mongodb";
import { GridFSBucket } from "mongodb";

const url = dbConfig.url;
const baseUrl = "http://localhost:9090/files/";
const mongoClient = new MongoClient(url);

const upload = {
  uploadFiles: async (req, res) => {
    try {
      await uploadFile(req, res);
      console.log("req.file", req.file);

      if (req.file == undefined) {
        return res.send({
          message: "You must select a file.",
        });
      }
      return res.send({
        message: "File has been uploaded.",
      });
    } catch (error) {
      console.log(error);

      return res.send({
        message: `Error when trying upload image: ${error}`,
      });
    }
  },
  getListFiles: async (req, res) => {
    try {
      await mongoClient.connect();

      const database = mongoClient.db(dbConfig.database);
      const images = database.collection(dbConfig.imgBucket + ".files");

      const cursor = images.find({});

      if ((await cursor.count()) === 0) {
        return res.status(500).send({
          message: "No files found!",
        });
      }

      let fileInfos = [];
      await cursor.forEach((doc) => {
        fileInfos.push({
          name: doc.filename,
          url: baseUrl + doc.filename,
        });
      });

      return res.status(200).send(fileInfos);
    } catch (error) {
      return res.status(500).send({
        message: error.message,
      });
    }
  },
  download: async (req, res) => {
    try {
      await mongoClient.connect();

      const database = mongoClient.db(dbConfig.database);
      const bucket = new GridFSBucket(database, {
        bucketName: dbConfig.imgBucket,
      });

      let downloadStream = bucket.openDownloadStreamByName(req.params.name);

      downloadStream.on("data", function (data) {
        return res.status(200).write(data);
      });

      downloadStream.on("error", function (err) {
        return res.status(404).send({ message: "Cannot download the Image!" });
      });

      downloadStream.on("end", () => {
        return res.end();
      });
    } catch (error) {
      return res.status(500).send({
        message: error.message,
      });
    }
  },
};

export default upload;
