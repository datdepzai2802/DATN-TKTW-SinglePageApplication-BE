import express from "express";

import auth from "./auth/index.router";
import routerUser from "./user/user.router";
import routerProduct from "./products/products.router";
import routerCategory from "./categories/categories.router";
import routerFormbook from "./formbook/formbook.router";
import routerPuslishing from "./publishing/publishing.router";
import routerAuthor from "./author/author.router";
import routerRate from "./rate/rating.router"
const router = express.Router();

router.use("", auth);
router.use("", routerUser);
router.use("", routerFormbook);
router.use("", routerPuslishing);
router.use("", routerAuthor);
router.use("", routerRate)
router.use("", routerProduct);
router.use("", routerCategory);
router.use("", routerSupplier);
router.use("", routerVoucher);
router.use("", routerBlog);
router.use("", routerCart);
router.use("", infomationPageCart);
router.use("", categoryInfomationPageCart);
router.use("", reportComment);
router.use("", Comment);
router.use("", productSeries);
router.use("", addressUser);

export default router;
