import express from "express";

import {
  add,
  list,
  read,
  remove,
  update,
} from "../../controllers/addressUser/addressUsers.controller";
const router = express.Router();

router.post("/info-user", add);
router.get("/info-user/:id", list);
router.get("/info-active/:id", read);
router.put("/info-user/:id", update);
router.delete("/info-user/:id", remove);

export default router;
