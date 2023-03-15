import express from "express";
import {
  add,
  list,
  read,
  remove,
  update,
} from "../../controllers/products/products.controllers";

const router = express.Router();
router.get("/product", list);
router.get("/product/:id", read);
router.post("/product/add", add);
router.put("/product/:id ", update);
router.delete("/product/:id", remove);

export default router;
