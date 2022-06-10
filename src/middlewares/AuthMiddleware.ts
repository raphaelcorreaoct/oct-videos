import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWTSecret } from "../jwt/jwt";
import { User } from "../types/User.d";

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authThoken = req.headers?.authorization;

  if (!authThoken) return res.status(401).send();

  try {
    const bearer = authThoken.split(" ")[1];
    const data = (await jwt.verify(bearer, JWTSecret)) as User;
    if (data.permission_level === 1) next();
    else res.status(401).send("You are not allowed to take action");
  } catch (error) {
    return res.status(500).send(error);
  }
};
