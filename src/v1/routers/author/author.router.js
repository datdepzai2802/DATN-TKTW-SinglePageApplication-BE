import express from "express"
import { add, list, read, remove, update } from "../../controllers/author/author.controllers"

const router = express.Router()
router.get("/authors", list)
router.get("/authors/:id", read)
router.post("/authors", add)
router.put("/authors/:id", update)
router.delete("/authors/:id", remove)

export default router