import express from "express";

import {
  list,
  read,
  update,
  remove,
  add,
} from "../../controllers/cart/cart.controllers";
const router = express.Router();

router.get("/cart", list);
router.get("/cart/:id", read);
router.post("/cart", add);
router.put("/cart/:id", update);
router.delete("/cart/:id", remove);

export default router;
