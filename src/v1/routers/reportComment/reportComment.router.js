import express from "express";
import {
  createReport,
  deleteReport,
  isReportComment,
  removeRep,
} from "../../controllers/reportComment/reportComment.comtroller";
import { removeSupplieres } from "../../controllers/supplieres/supplieres.controller";

const router = express.Router();
router.post("/reportComment", createReport);
router.delete("/reportComment/:id", removeRep);
router.get("/reportComment/:commentId/:reporterId", isReportComment);
// router.get("/reportComment/:id");
// router.put("/reportComment/:id", updateSupplieres);
// router.delete("/reportComment/:id", removeSupplieres);
export default router;
