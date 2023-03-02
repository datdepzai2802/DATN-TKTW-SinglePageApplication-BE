import express from "express";
import { listCategory, addCategory, readCategory, updateCategory, removeCategory } from "../../controllers/categories/categories.controllers"


const router = express.Router();

router.get("/categories", listCategory);
router.get("/categories/:id", readCategory);
router.post("/categories", addCategory);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", removeCategory);


export default router;