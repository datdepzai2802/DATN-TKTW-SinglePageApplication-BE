import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import routerProduct from "./v1/routers/product.router";
//
const app = express();
const PORT = process.env.PORT;
//middlewaer
app.use(express.json());
app.use(cors());
app.use(morgan());

app.use("/api/v1", routerProduct);
//connect mongoose
mongoose.connect("mongodb://localhost:27017/nodeProject", (error) => {
  if (error) return console.log("Connect Database False!");
  console.log("Connect Database successful!");
});
//create server
app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
