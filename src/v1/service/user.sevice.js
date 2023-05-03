import OtpGenerator from "otp-generator";
import _User from "../models/user.model";
import _Otp from "../models/otp.model";
import { insertOtp, validOtp } from "../service/otp.service";
import sendMailSevice from "./sendMail.service";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";

export const registerSevice = async ({ email }) => {
  try {
    const user = await _User.findOne({ email });
    if (user) {
      return {
        code: 400,
        message: "Account already exists",
      };
    }
    const otpCreate = OtpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    console.log("otpCreate", otpCreate);
    const resultOtp = await insertOtp({
      otp: otpCreate,
      email,
    });

    if (resultOtp) {
      sendMailSevice({
        gmail: email,
        subject: "OTP shop books Niki",
        text: `otp: ${otpCreate}`,
        html: "",
      });
    }

    return {
      code: 200,
      element: resultOtp,
    };
  } catch (error) {
    console.log(error);
  }
};

const createUser = async ({ email }) => {
  try {
    const passwordUser = nanoid(8);
    const salt = await bcrypt.genSalt(10);
    console.log("password User", passwordUser);
    const hashPassword = await bcrypt.hash(passwordUser, salt);
    const user = await _User.create({
      email,
      password: hashPassword,
    });
    if (user) {
      sendMailSevice({
        gmail: email,
        subject: "OTP Account shop books Niki",
        text: `Chào mừng bạn đến với Niki, tài khoản:${email} password:${passwordUser}`,
        html: "",
      });
    }
    return user ? true : false;
  } catch (error) {
    console.log(error);
  }
};

export const verifyOtpSevice = async ({ email, otp }) => {
  try {
    const otps = await _Otp.find({ email });
    console.log("otp", otps);
    if (otps.length === 0) {
      return {
        code: 404,
        message: "Expired otp",
      };
    }
    const lastOtp = otps[otps.length - 1];
    const isvalid = await validOtp({ otp, hashOtp: lastOtp.otp });
    if (!isvalid) {
      return {
        code: 401,
        message: "Otp inValid",
      };
    }
    if (isvalid && email === lastOtp.email) {
      const user = await createUser({ email });
      if (user) {
        await _Otp.deleteMany({ email });
      }
      return {
        code: 200,
        element: user,
      };
    }
  } catch (error) {
    console.log(error);
  }
};
