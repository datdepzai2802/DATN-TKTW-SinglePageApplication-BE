import mongoose from "mongoose";
const addressUserSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
  },
  numberPhone: {
    type: String,
  },
  selectedProvince: {
    type: String,
  },
  selectedDistrict: {
    type: String,
  },
  selectedWard: {
    type: String,
  },
  specificAddress: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
export default mongoose.model("AddressUser", addressUserSchema);
