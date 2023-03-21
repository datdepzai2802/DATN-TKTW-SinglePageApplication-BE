import { number } from "joi";
import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
  name: String,
  path: String,
  type: String,
  size: String,
});

export default mongoose.model("Image", imageSchema);
