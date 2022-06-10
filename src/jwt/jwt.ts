import { Response } from "express";
import jwt from "jsonwebtoken";

const JWTSecret = "Chablau!!";

/**
 *
 * @param data - Data it will be saved in the Token
 * @param callback - Optional callback return tokens
 */
export const getBearerToken = (
  data: string | object | Buffer,
  callback?: (token: string) => void
) => {
  jwt.sign(data, JWTSecret, { expiresIn: 604800 }, (error, token) => {
    if (error) {
      throw new Error(error.message);
    } else {
      if (callback && token) callback(token);
    }
  });
};
