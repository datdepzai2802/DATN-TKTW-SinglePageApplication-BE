import express from "express";
import {
  createReport,
  isReportComment,
} from "../../controllers/reportComment/reportComment.comtroller";

const router = express.Router();
router.post("/reportComment", createReport);
router.get("/reportComment/:commentId/:reporterId", isReportComment);
// router.get("/reportComment/:id");
// router.put("/reportComment/:id", updateSupplieres);
// router.delete("/reportComment/:id", removeSupplieres);
export default router;
