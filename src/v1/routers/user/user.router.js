import express from "express";
import User from "../../controllers/user/user.controllers";
const router = express.Router();
router.get("/user", User.list);
router.get("/user/:id", User.read);
router.post("/user/add", User.add);
router.put("/user/:id ", User.update);
router.delete("/user/:id", User.remove);
export default router;
