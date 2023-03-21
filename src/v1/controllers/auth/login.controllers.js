import _User from "../../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

// ///////////////////generate TOKEN//////////////////////////////////////////////
const generateToken = (value) => {
  const token = jwt.sign(value, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });
  return token;
};

const generateRefreshToken = (value) => {
  const token = jwt.sign(value, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "182d",
  });
  return token;
};

// /////////////////////////////////////////////////////////////////

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
      console.log("user", user);
      const userToken = {
        id: user.id,
        email: user.email,
        role: user.role,
      };
      const token = generateToken(userToken);
      const refreshToken = generateRefreshToken(userToken);
      user.password = undefined;
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      const User = {
        ...user._doc,
        token,
      };
      console.log("User", User);
      return res.status(200).json(User);
    }
  } catch (error) {
    next(error);
  }
};

// ///////////////////////////////////////////////////////////////
export const requestRefreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies["refreshToken"];
    console.log("refreshToken", refreshToken);
    if (!refreshToken)
      return res.status(401).json({
        message: "you are not authenticated !",
      });

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (error, user) => {
        if (error) {
          console.log(error);
        }
        const { iat, exp, ...other } = user;
        console.log("other", other);
        const newToken = generateToken(other);
        const newRefreshToken = generateRefreshToken(other);
        res.cookie("refreshToken", newRefreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });

        return res.status(200).json({ token: newToken });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default login;
