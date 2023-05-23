import mongoose from "mongoose";

const formbookSchema = mongoose.Schema({
  name: {
    type: String,
  },
});

export default mongoose.model("formbooks", formbookSchema);
