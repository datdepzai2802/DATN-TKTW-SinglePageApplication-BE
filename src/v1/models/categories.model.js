import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: Array,
    default: [],
  },
  icon: {
    type: String,
  },
});

export default mongoose.model("categories", categorySchema);
