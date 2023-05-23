
import express from "express"
import { addRating, listRating, readRating, removeRating, updateRating } from "../../controllers/rating/rating.controllers";

const router = express.Router();
router.get("/product", listRating)
router.get("/product/:id", readRating)
router.post("/product/add", addRating)
router.put("/product/:id ", updateRating)
router.delete("/product/:id", removeRating)
export default router

