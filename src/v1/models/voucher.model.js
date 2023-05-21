import mongoose from "mongoose";
const voucherSchema = mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  promotion: {
    type: Number,
  },
  apply: {
    type: String,
    unique: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Voucher", voucherSchema);
