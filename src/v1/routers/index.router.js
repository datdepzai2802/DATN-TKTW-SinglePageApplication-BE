import express from "express";

import routerCategory from "./categories/categories.router";
import auth from "./auth/index.router";
import routerUser from "./user/user.router";
import routerProduct from "./products/products.router";
import routerFormbook from "./formbook/formbook.router";
import routerPuslishing from "./publishing/publishing.router";
import routerAuthor from "./author/author.router";
import routerSupplier from "./supplieres/supplieres.router";
import routerVoucher from "./voucher/voucher.router";
import routerBlog from "./blog/blog.router";
import routerCart from "./cart/cart.router";
import routerComment from "./comment/comment.router";
import reportComment from "./reportComment/reportComment.router";

const router = express.Router();

router.use("", auth);
router.use("", routerUser);
router.use("", routerFormbook);
router.use("", routerPuslishing);
router.use("", routerAuthor);
router.use("", routerProduct);
router.use("", routerCategory);
router.use("", routerSupplier);
router.use("", routerVoucher);
router.use("", routerBlog);
router.use("", routerCart);
router.use("", routerComment);
router.use("", reportComment);

export default router;
