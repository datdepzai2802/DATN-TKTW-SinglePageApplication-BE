import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import dbConfig from "./v1/db/config";
import router from "./v1/routers/index.router";
import createError from "http-errors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

const corsOptinon = {
  origin: "http://localhost:9090",
};
//middlewaer
app.use(cors());
// app.use(cors(corsOptinon));
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser());

// router
app.use("/api/v1", router);
//
app.use((req, res, next) => {
  return next(createError.NotFound("NOT FOUND!!!"));
});
app.use((err, req, res, next) => {
  res.json({
    status: err.status || 500,
    message: err.message,
  });
});

//connect mongoose

mongoose.connect(`${dbConfig.url}/${dbConfig.database}`, (error) => {
  if (error) return console.log("Connect Database False!");
  console.log("Connect Database successfuly!");
});
//create server
app.listen(process.env.PORT || 9000, () => {
  console.log(`server running ${process.env.PORT}`);
});
