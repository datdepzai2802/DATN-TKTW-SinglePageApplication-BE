import bcrypt from "bcrypt";
import otpModel from "../models/otp.model";

export const insertOtp = async (otp, email) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashOtp = await bcrypt.hash(otp, salt);
    const Otp = await otpModel.create({
      email: email,
      otp: hashOtp,
    });
    return Otp ? 1 : 0;
  } catch (error) {
    return {
      code: 400,
      message: "Lỗi OTP",
    };
  }
};
