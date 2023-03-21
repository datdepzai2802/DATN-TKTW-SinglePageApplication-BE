import mongoose from "mongoose";
const authorSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  avatar: {
    type: String,
    unique: true,
  },
});
export default mongoose.model("author", authorSchema);
