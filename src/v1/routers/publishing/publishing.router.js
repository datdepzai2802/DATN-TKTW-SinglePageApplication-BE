import express from "express"
import { add, list, read, remove, update } from "../../controllers/publishing/publishing.controllers"

const router = express.Router()
router.get("/publishs",list)
router.get("/publish/:id",read)
router.get("/publish",add)
router.get("/publishs",update)
router.get("/publishs",remove)

export default router