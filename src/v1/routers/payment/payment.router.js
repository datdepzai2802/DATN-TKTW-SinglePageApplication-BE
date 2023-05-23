import express from "express";
const router = express.Router();
import { add } from "../../controllers/payment/payment.controller";
router.post("/payment", add);

export default router;
