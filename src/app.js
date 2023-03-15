import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import router from "./v1/routers/index.router";
import createError from "http-errors";
import cookieParser from "cookie-parser";

const app = express();
// const PORT = process.env.PORT;
//middlewaer
app.use(express.json());
app.use(cors());
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

mongoose.connect(process.env.MONGGO_DB, (error) => {
  if (error) return console.log("Connect Database False!");
  console.log("Connect Database successfuly!");
});
// const PORT = 9000
//create server
app.listen(process.env.PORT || PORT, () => {
  console.log(`server running ${process.env.PORT}`);
});
