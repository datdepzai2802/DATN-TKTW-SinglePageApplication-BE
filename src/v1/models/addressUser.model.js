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
    type: Number,
  },
  selectedDistrict: {
    type: Number,
  },
  selectedWard: {
    type: String,
  },
  specificAddress: {
    type: String,
  },
  districtName: {
    type: String,
  },
  provinceName: {
    type: String,
  },
  wardName: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
export default mongoose.model("AddressUser", addressUserSchema);
