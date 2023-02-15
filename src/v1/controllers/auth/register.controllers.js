import _User from "../../models/user.model";
import bcrypt from "bcrypt";
import { registerSevice, verifyOtpSevice } from "../../service/user.sevice";
import sendMailSevice from "../../service/sendMail.service";

export const register = async (req, res) => {
  try {
    const { email } = req.body;
    const { element, code, message } = await registerSevice({
      email,
    });
    return res.status(code).json({
      message,
      element,
    });
  } catch (error) {
    next(error);
  }
};

export const veriryOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    const { code, element, message } = await verifyOtpSevice({ email, otp });
    return res.status(code).json({
      message,
      element,
    });
  } catch (error) {
    next(error);
  }
};
