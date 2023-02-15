import _User from "../../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await _User.findOne({ email }).exec();
    if (!user) {
      return res.status(400).json({
        message: "Email không tồn tại",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        message: "Sai mật khẩu",
      });
    }

    if (user && validPassword) {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        process.env.JWT_KEY,
        { expiresIn: "1d" }
      );
      user.password = undefined;
      return res.status(200).json({ user, token });
    }
  } catch (error) {
    next(error);
  }
};

export default login;
