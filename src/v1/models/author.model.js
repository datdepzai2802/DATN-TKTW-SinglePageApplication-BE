import mongoose from "mongoose";
const authorSchema = mongoose.Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
});
export default mongoose.model("Author", authorSchema);
