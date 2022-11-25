import mongoose from "mongoose";

const OtpSchema = mongoose.Schema(
  {
    email: String,
    otp: String,
    time: {
      type: Date,
      default: Date.now,
      index: { expires: 10 },
    },
  },
  { timestamps: true }
);

export default mongoose.model("otp", OtpSchema);
