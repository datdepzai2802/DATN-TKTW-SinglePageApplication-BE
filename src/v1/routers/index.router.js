import express from "express";
import auth from "./auth/index.router";

const router = express.Router();

router.use("", auth);

export default router;
