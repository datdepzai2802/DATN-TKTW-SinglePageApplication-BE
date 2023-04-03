import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: {
    type: string,
  },
  html: {
    type: string,
  },
  isHidden: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: ObjectId,
    ref: "user",
  },
});

export default mongoose.model("Blog", blogSchema);
