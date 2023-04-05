import mongoose from "mongoose";
const supplieresSchema = mongoose.Schema({
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

export default mongoose.model("Supplieres", supplieresSchema);
