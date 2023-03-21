import { number } from "joi";
import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  name: {
    type: String,
  },
  data: {
    iamge: Buffer,
    contentType: String,
  },
});

export default mongoose.model("comment", commentSchema);
