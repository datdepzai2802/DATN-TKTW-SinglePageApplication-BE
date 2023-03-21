import express from "express";
import {
  add,
  list,
  read,
  remove,
  update,
} from "../../controllers/products/products.controllers";
import isLogin from "../../middleware/isLogin.middleware";

const router = express.Router();
router.get("/product", list);
router.get("/product/:id", read);
router.post("/product/add", isLogin, add);
router.put("/product/:id ", isLogin, update);
router.delete("/product/:id", isLogin, remove);

export default router;
