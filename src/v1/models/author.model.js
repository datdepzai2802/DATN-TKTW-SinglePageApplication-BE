import mongoose from "mongoose";
const authorSchema = mongoose.Schema({
  name: {
    type: String,
  },
  avatar: {
    type: Array,
  },
});
export default mongoose.model("authors", authorSchema);
