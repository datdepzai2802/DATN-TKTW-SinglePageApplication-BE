import express from "express"
import { add, list, read, remove, update } from "../../controllers/publishing/publishing.controllers"

const router = express.Router()
router.get("/publishs", list)
router.get("/publishs/:id", read)
router.post("/publishs", add)
router.put("/publishs/:id", update)
router.delete("/publishs/:id", remove)

export default router