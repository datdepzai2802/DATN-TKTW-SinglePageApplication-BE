import express from "express";
import {
    add,
    list,
    read,
    remove,
    searchPublish,
    update,
} from "../../controllers/publishing/publishing.controllers";

const router = express.Router();
router.get("/publishs", list);
router.get("/publishs/:id", read);
router.post("/publishs", add);
router.put("/publishs/:id", update);
router.delete("/publishs/:id", remove);
router.get("/search-publishing", searchPublish);

export default router;
