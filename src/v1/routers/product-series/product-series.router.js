import express from "express";
import {
    add,
    read,
    list,
    update,
    remove,
    searchPro,
} from "../../controllers/product-series/product-series.controler";

const router = express.Router();
router.get("/product-series", list);
router.get("/product-series/:id", read);
router.post("/product-series", add);
router.put("/product-series/:id", update);
router.delete("/product-series/:id", remove);
router.get("/search-product-series", searchPro);

export default router;
