import express from "express";
import {
  add,
  list,
  read,
  remove,
  update,
} from "../../controllers/formbook/formbook.controllers";

const router = express.Router();
router.get("/formbooks", list);
router.get("/formbooks/:id", read);
router.post("/formbooks", add);
router.put("/formbooks/:id", update);
router.delete("/formbooks/:id", remove);

export default router;
