
import express from "express";
import { addSupplieres, listSupplieres, readSupplieres, removeSupplieres, updateSupplieres } from "../../controllers/supplieres/supplieres.controller";

const router = express.Router();
router.get("/supplieres", listSupplieres)
router.get("/supplieres/:id", readSupplieres)
router.post("/supplieres/add", addSupplieres)
router.put("/supplieres/:id ", updateSupplieres)
router.delete("/supplieres/:id", removeSupplieres)
export default router

