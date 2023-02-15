import mongoose from "mongoose";

const otpSchema = mongoose.Schema({
  otp: {
    type: "string",
  },
  email: {
    type: "string",
  },
  time: { type: Date, default: Date.now(), index: { expires: 30 } },
});

export default mongoose.model("Otp", otpSchema);
