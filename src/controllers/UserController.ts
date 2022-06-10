import { Request, Response } from "express";
import { User } from "../types/User";
import UserModel from "../database/UserModel";

class UserController {
  async findAll(req: Request, res: Response) {
    try {
      const users = await UserModel.findAll();
      return users.length > 0
        ? res.status(200).json(users)
        : res.status(204).send();
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async findOne(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const user = await UserModel.findOne({ where: { id: userId } });
      return user ? res.status(200).json(user) : res.status(204).send();
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async create(req: Request, res: Response) {
    try {
      const data = req.body as User;

      const userExist = await UserModel.findOne({
        where: { email: data.email },
      });

      if (userExist) {
        res.status(409);
        res.send({ error: `The email ${data.email} is already registered` });
        return;
      }

      await UserModel.create({
        email: data.email,
        password: "12345",
        permission_level: 1,
      } as User);

      res.json({ message: "User registered successfully!" });
    } catch (error) {
      res.status(500);
      res.json({
        error,
      });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { name, avatar, login, email } = req.body as User;
      const { userId } = req.params;

      await UserModel.update(
        {
          name,
          avatar,
          login,
          email,
        } as User,
        { where: { id: userId } }
      );

      return res.status(204).json({ message: "User registered successfully!" });
    } catch (error) {
      res.status(500);
      res.json({
        error,
      });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { userId } = req.body;
      await UserModel.destroy({ where: { id: userId } });
      return res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new UserController();
