import mongoose from "mongoose";
const voucherSchema = mongoose.Schema({
  voucherId: {
    type: String,
  },
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
  },
});

export default mongoose.model("vouchers", voucherSchema);
