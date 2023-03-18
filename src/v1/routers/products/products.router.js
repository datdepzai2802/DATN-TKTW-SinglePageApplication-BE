import express from "express"
import { addProduct, listProduct, readProduct, removeProduct, updateProduct } from "../../controllers/products/products.controllers";

const router = express.Router();
router.get("/product", listProduct)
router.get("/product/:id", readProduct)
router.post("/product/add", addProduct)
router.put("/product/:id ", updateProduct)
router.delete("/product/:id", removeProduct)
export default router