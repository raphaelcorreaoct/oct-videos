import { Request, Response } from 'express';
import { User } from '../types/User';
import UserModel from '../database/UserModel';
import bcrypt from 'bcrypt';

const attrReturns = [
  'name',
  'avatar',
  'login',
  'email',
  'id',
  'permission_level',
];

class UserController {
  async findAll(req: Request, res: Response) {
    try {
      const users = await UserModel.findAll({ attributes: attrReturns });
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
      const [user] = await UserModel.findAll({
        where: { id: userId },
        attributes: attrReturns,
      });
      return user ? res.status(200).json(user) : res.status(204).send();
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async create(req: Request, res: Response) {
    try {
      const data = req.body as User;
      const salt = await bcrypt.genSalt(10);
      const hashPassw = await bcrypt.hash(data.password, salt);

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
        password: hashPassw,
        permission_level: 1,
      } as User);

      res.json({ message: 'User registered successfully!' });
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
          avatar: 'https://picsum.photos/300/300',
          login,
          email,
        },
        { where: { id: userId } },
      );

      return res.status(204).json({ message: 'User registered successfully!' });
    } catch (error) {
      res.status(500);
      res.json({
        error,
      });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { userId } = req.params;

      await UserModel.destroy({ where: { id: userId } });
      return res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new UserController();
