import express from "express";
import {
  addProduct,
  listProduct,
  readProduct,
  removeProduct,
  updateProduct,
  productSearch,
  relatedProducts,
} from "../../controllers/products/products.controllers";

const router = express.Router();

router.get("/product", listProduct);
router.get("/product/:id/related", relatedProducts);
router.get("/product/:id", readProduct);
router.post("/product", addProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", removeProduct);
router.get("/search-product", productSearch);
export default router;
