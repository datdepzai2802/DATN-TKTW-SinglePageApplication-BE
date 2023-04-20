import mongoose, { ObjectId } from "mongoose";

const commentSchema = mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  isHidden: {
    type: Boolean,
    default: false,
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

export default mongoose.model("Comment", commentSchema);
