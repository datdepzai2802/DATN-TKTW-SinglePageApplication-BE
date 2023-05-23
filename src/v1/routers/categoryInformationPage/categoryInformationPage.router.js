import express from "express";
import {
    list,
    add,
    read,
    remove,
    update,
    searchCateInfor,
} from "../../controllers/categoryInformationPage/categoryInformationPage";

const router = express.Router();

router.get("/categories-information", list);
router.get("/categories-information/:id", read);
router.post("/categories-information", add);
router.put("/categories-information/:id", update);
router.delete("/categories-information/:id", remove);
router.get("/search-categories-information", searchCateInfor);

export default router;
