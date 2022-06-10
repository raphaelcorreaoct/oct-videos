import express from "express";
import UserController from "../controllers/UserController";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";

const router = express.Router();

router.get("/user/:userId", AuthMiddleware, UserController.findOne);
router.get("/user", AuthMiddleware, UserController.findAll);
router.post("/user", UserController.create);
router.put("/user/:userId", AuthMiddleware, UserController.update);
router.delete("/user/:userId", AuthMiddleware, UserController.delete);

export default router;
