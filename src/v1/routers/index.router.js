import express from "express";
import auth from "./auth/index.router";
import routerCategory from "./categories/categories.router";
import routerProduct from "./products/products.router";
const router = express.Router();

router.use("", auth);
router.use("", routerCategory);
router.use("", routerProduct);

export default router;