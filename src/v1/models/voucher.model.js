import mongoose from "mongoose";

const voucherSchema = mongoose.Schema({
  code: { type: String },
  discount: { type: Number },
  createdAt: { type: Date, default: Date.now },
  expirationDate: { type: Date },
  usageLimit: { type: Number, default: 1 },
  usedCount: { type: Number, default: 0 },
  description: { type: String },
  nameCreated: { type: String },
  isActive: { type: Boolean, default: false }
});

export default mongoose.model("Voucher", voucherSchema);
