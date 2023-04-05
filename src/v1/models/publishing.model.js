import mongoose from "mongoose";
const publishingSchema = mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
});
export default mongoose.model("Publishing", publishingSchema);
