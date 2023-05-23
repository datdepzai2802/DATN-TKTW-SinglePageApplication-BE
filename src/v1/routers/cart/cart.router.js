import express from "express";

import {
  list,
  update,
  remove,
  add,
  read,
} from "../../controllers/cart/cart.controllers";
const router = express.Router();

router.get("/carts/:id", list);
router.get("/cart/:id", read);
router.post("/cart", add);
router.put("/cart/:id", update);
router.delete("/cart/:id", remove);

export default router;
