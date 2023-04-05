import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  icon: {
    type: String,
  },
  baner: {
    type: String,
  },
});

export default mongoose.model("Categories", categorySchema);
