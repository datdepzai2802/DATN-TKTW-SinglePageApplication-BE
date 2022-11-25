import { signup } from "../service/user.service";
import userModel from "../models/user.model";

export const signupUser = async (req, res, next) => {
  try {
    const email = req.body.email;
    const otp = await signup(email);
    console.log(otp);
  } catch (error) {
    next(error);
  }
};
