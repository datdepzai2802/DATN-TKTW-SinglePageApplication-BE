import mongoose from "mongoose";

const voucherSchema = mongoose.Schema({
    code: { type: String },
    discount: { type: Number },
    createdAt: { type: Date, default: Date.now },
    expirationDate: { type: Date },
    usageLimit: { type: Number },
    usedCount: { type: Number },
    description: { type: String },
    user: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
    },
    isActive: { type: Boolean, default: false },
});

export default mongoose.model("Voucher", voucherSchema);
