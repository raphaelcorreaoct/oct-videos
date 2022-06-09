import express from "express";
import { Request, Response } from "express";

const router = express.Router();

//
router.get("/auth", (req: Request, res: Response) => {
  res.json({
    message: "User",
  });
});

export default router;
