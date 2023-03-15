import express from "express";
import {
  listCategory,
  addCategory,
  readCategory,
  updateCategory,
  removeCategory,
} from "../../controllers/categories/categories.controllers";
import isLogin from "../../middleware/isLogin.middleware";

const router = express.Router();

router.get("/categories", listCategory);
router.get("/categories/:id", readCategory);
router.post("/categories", isLogin, addCategory);
router.put("/categories/:id", isLogin, updateCategory);
router.delete("/categories/:id", isLogin, removeCategory);

export default router;
