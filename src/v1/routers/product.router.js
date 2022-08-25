import express from "express";
import {
  create,
  List,
  read,
  remove,
  update,
} from "../controllers/product.controllers";

const router = express.Router();

router.get("/product", List);
router.get("/product/:id", read);
router.post("/product", create);
router.put("/product/:id", update);
router.delete("/product/:id", remove);

export default router;
