import _Media from "../../models/media.model";
import uploadFile from "../../middleware/upload.middleware";
import dbConfig from "../../db/config";
// import { MongoClient } from "mongodb";
// import { GridFSBucket } from "mongodb";

// const url = dbConfig.url;
// const baseUrl = "http://localhost:9090/files/";
// const mongoClient = new MongoClient(url);

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
};

export default upload;
