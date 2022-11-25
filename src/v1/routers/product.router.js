import express from "express";
import {
  create,
  List,
  read,
  remove,
  update,
} from "../controllers/product.controllers";

const router = express.Router();

router.get("/", List);
router.get("/:id", read);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
