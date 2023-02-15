import express from "express";
import login from "../../controllers/auth/login.controllers";
import {
  register,
  veriryOtp,
} from "../../controllers/auth/register.controllers";

const router = express.Router();

router.post("/register", register);
router.post("/verifyotp", veriryOtp);
router.post("/login", login);

export default router;
