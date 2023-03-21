import express from "express"
import { add, list, read, remove, update } from "../../controllers/publishing/publishing.controllers"

const router = express.Router()
router.get("/publishs",list)
router.get("/publish/:id",read)
router.post("/publish",add)
router.patch("/publishs/:id",update)
router.delete("/publishs/:id",remove)

export default router