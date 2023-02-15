import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import router from "./v1/routers/index.router";
import createError from "http-errors";
//
const app = express();
const PORT = process.env.PORT;
//middlewaer
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

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
mongoose.connect(process.env.MONGGODB_Link, (error) => {
  if (error) return console.log("Connect Database False!");
  console.log("Connect Database successfuly!");
});

//create server
app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
