import mongoose, { ObjectId } from "mongoose";

const blogSchema = mongoose.Schema({
  title: {
    type: String,
  },
  html: {
    type: String,
  },
  isHidden: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Blog", blogSchema);
