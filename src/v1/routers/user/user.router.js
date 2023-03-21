import express from "express";
import User from "../../controllers/user/user.controllers";
import isLogin from "../../middleware/isLogin.middleware";
const router = express.Router();

router.get("/user", User.list);
router.get("/user/:id", User.read);
router.post("/user/add", isLogin, User.add);
router.put("/user/:id ", isLogin, User.update);
router.delete("/user/:id", isLogin, User.remove);
export default router;
