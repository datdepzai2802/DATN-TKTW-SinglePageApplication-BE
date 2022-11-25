import User from "../models/user.model";
import otp from "otp-generator";
import { insertOtp, validOtp } from "./otp.service";
const verifyOtp = async (email, otp) => {
  try {
    const otpHolder = await find({ email });
    if (!otpHolder.length) {
      return {
        code: 400,
        message: "Expired OTP!",
      };
    }
    const lastOtp = otpHolder[otpHolder.length - 1];

    const isValid = await validOtp({
      otp,
      hashOtp: lastOtp.otp,
    });

    if (!isValid) {
      return {
        code: 401,
        message: Invalid,
      };
    }

    if (isValid && email === lastOtp.email) {
      //create user
      const user = await User.create({
        name: "hihi",
        email: "hihi@gmail.com",
      });
    }
  } catch (error) {}
};

export const signup = async (email) => {
  const user = await User.findOne({ email: email });
  if (user) {
    return {
      code: 400,
      message: "Tài khoản tồn tại",
    };
  }

  const OTP = otp.generate(6, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  console.log(OTP);

  return {
    code: 200,
    element: await insertOtp(OTP, email),
  };
};
