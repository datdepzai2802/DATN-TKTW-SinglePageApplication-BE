import express from "express";
import routerUser from "./user.router";
import routerProduct from "./product.router";

const router = express.Router();

router.use("/user", routerUser);
router.use("/product", routerProduct);

export default router;
