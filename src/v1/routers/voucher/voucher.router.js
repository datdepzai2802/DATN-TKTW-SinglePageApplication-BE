import express from "express"
import { add, list, read, remove, update } from "../../controllers/voucher/voucher.controllers"

const router = express.Router()
router.get("/voucher", list)
router.get("/voucher/:id", read)
router.post("/voucher", add)
router.put("/voucher/:id", update)
router.delete("/voucher/:id", remove)

export default router