import express from "express";
const router = express.Router();
import Upload from "../../controllers/upload/upload.controller";

// router
// router.get("/", homeController.getHome);

router.post("/upload", Upload.uploadFiles);
router.get("/files", Upload.getListFiles);
router.get("/files/:name", Upload.download);

export default router;
