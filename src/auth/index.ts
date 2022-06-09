import express from "express";
import { Request, Response } from "express";
import { getBearerToken } from "../jwt/jwt";
import { UserLogin } from "../types/User";

const router = express.Router();

// Verificar se o usuário tem o um token válido
router.get("/auth", (req: Request, res: Response) => {
  res.json({
    message: "User",
  });
});

// faz o login do usuário
router.post("/auth/login", (req: Request, res: Response) => {
  const { email, password } = req.body as UserLogin;

  if (!email) {
    res.status(400);
    res.send({ error: "Invalid E-mail" });
  }
  if (!password) {
    res.status(400);
    res.send({ error: "Invalid password" });
  }

  getBearerToken({ name: "Jhon", email }, res, (token) => {
    res.status(200);
    res.send({
      token,
    });
  });
});

// Faz o logout do usuário
router.get("/auth/logout", (req: Request, res: Response) => {
  res.json({
    message: "User",
  });
});

export default router;
