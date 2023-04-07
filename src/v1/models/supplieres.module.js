import mongoose from "mongoose";
const supplieresSchema = mongoose.Schema({
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

export default mongoose.model("Supplieres", supplieresSchema);
