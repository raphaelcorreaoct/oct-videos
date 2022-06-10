import express from "express";
import UserController from "../controllers/UserController";

const router = express.Router();

router.get("/user/:userId", UserController.findOne);
router.get("/user", UserController.findAll);
router.post("/user", UserController.create);
router.put("/user/:userId", UserController.update);
router.delete("/user/:userId", UserController.delete);

export default router;
