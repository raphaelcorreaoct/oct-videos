import express from "express";
import { Request, Response } from "express";

const router = express.Router();

//Pegar informações de um usuário
router.get("/user", (req: Request, res: Response) => {
  res.json({
    message: "User",
  });
});

export default router;
