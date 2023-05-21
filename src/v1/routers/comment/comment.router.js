import express from "express";

import isLogin from "../../middleware/isLogin.middleware";
import {
  listComments,
  createComment,
  getComments,
  deleteComment,
  updateComment,
} from "../../controllers/comment/comment.controllers";

const router = express.Router();

router.get("/comments/:productId", listComments);
router.get("/comment/:id", getComments);
router.post("/comment", createComment);
router.put("/comment/:id", updateComment);
router.delete("/comment/:id", deleteComment);

export default router;
