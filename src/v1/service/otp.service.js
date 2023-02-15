import bcrypt from "bcrypt";
import _Otp from "../models/otp.model";

export const insertOtp = async ({ otp, email }) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashOtp = await bcrypt.hash(otp, salt);

    const newOtp = new _Otp({
      email,
      otp: hashOtp,
    });
    await newOtp.save();
    return newOtp ? true : false;
  } catch (error) {
    console.log(error);
  }
};

export const validOtp = async ({ otp, hashOtp }) => {
  try {
    const isvalid = await bcrypt.compare(otp, hashOtp);
    return isvalid;
  } catch (error) {
    console.log(error);
  }
};
