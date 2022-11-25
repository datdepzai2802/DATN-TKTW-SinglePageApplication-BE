import express from "express";
import { signupUser } from "../controllers/user.controllers";

const router = express.Router();

router.post("/signup", signupUser);

export default router;
