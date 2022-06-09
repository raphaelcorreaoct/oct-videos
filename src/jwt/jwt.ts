import { Response } from "express";
import jwt from "jsonwebtoken";

const JWTSecret = "Chablau!!";

/**
 *
 * @param data - Data it will be saved in the Token
 * @param res - Express response if there is an error
 * @param callback - Optional callback return tokens
 */
export const getBearerToken = (
  data: any,
  res: Response,
  callback?: (token: string) => void
) => {
  jwt.sign(data, JWTSecret, { expiresIn: "30d" }, (error, token) => {
    if (error) {
      res.status(500);
      res.send({ error: "Internal server error" });
    } else {
      if (callback && token) callback(token);
    }
  });
};
