import mongoose from "mongoose";
const supplieresSchema = mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: string,
  },
  email: {
    type: string,
  },
  address: {
    type: string,
  },
});
export default mongoose.model("supplieres", supplieresSchema);
