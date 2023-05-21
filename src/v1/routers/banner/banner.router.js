import express from "express";
import { addBanner, listBanner, readBanner, removeBanner, updateBanner } from "../../controllers/banner/banner.controller";

const router = express.Router();
router.get("/banner", listBanner)
router.get("/banner/:id", readBanner)
router.post("/banner", addBanner)
router.put("/banner/:id", updateBanner)
router.delete("/banner/:id", removeBanner)
export default router

