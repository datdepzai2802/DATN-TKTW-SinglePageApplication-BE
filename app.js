import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import dbConfig from "./src/v1/db/config";
import router from "./src/v1/routers/index.router";
import createError from "http-errors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();
const corsOptinon = {
  origin: "http://localhost:9090",
};

//middlewaer
// app.use(cors(corsOptinon));
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/v1", router);

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
const connectParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGGO_ASLAT || process.env.MONGGO_URL, connectParams)
  .then(() => {
    console.log("connect database successfully");
  })
  .catch((e) => {
    console.log("Error: ", e);
  });
//create server
app.listen(process.env.PORT || 9091, () => {
  console.log(`server running ${process.env.PORT}`);
});
