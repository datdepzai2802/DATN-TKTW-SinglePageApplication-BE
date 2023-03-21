import { number } from "joi";
import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  title: {
    type: string,
  },
  content: {
    type: string,
  },
  isHidden: {
    type: Boolean,
    default: true,
  },
  like: {
    type: Number,
  },
  disLike: {
    type: Number,
    default: 0,
  },
  userId: {
    type: ObjectId,
    ref: "User",
  },
  blogId: {
    type: ObjectId,
    ref: "Blog",
  },
});

export default mongoose.model("comment", commentSchema);