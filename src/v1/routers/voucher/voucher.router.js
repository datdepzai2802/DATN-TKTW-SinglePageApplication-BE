import express from "express"
import { add, list, read, remove, update } from "../../controllers/voucher/voucher.controllers"

const router = express.Router()
router.get("/vouchers",list)
router.get("/voucher/:id",read)
router.post("/vouchers",add)
router.patch("/vouchers/:id",update)
router.delete("/vouchers/:id",remove)

export default router