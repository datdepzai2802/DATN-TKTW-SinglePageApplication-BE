import express from "express";
import { addBlog, listBlog, readBlog, removeBlog, updateBlog } from "../../controllers/blog/blog.controller";

const router = express.Router();
router.get("/blog", listBlog)
router.get("/blog/:id", readBlog)
router.post("/blog/add", addBlog)
router.put("/blog/:id", updateBlog)
router.delete("/blog/:id", removeBlog)
export default router

