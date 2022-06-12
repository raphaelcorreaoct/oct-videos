import { Request, Response } from 'express';
import UserModel from '../database/UserModel';
import bcrypt from 'bcrypt';
import { getBearerToken } from '../jwt/jwt';

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email) {
        return res.status(400).json({ error: 'Invalid E-mail' });
      }
      if (!password) {
        return res.status(400).json({ error: 'Invalid password' });
      }

      const user = await UserModel.findOne({
        where: { email },
      });

      if (!user)
        return res.status(400).json({ message: 'User or password incorrect!' });

      if (await bcrypt.compare(password, user.password)) {
        const { name, id, avatar, login, email, permission_level } = user;

        getBearerToken(
          { name, id, avatar, login, email, permission_level },
          token => {
            res.status(200).json({
              token,
              user: { name, id, avatar, login, email, permission_level },
            });
          },
        );
        return;
      } else {
        return res.status(405).send('Not Allowed');
      }
    } catch (error) {
      return res.status(500).send();
    }
  }
  async refreshToken() {
    return null;
  }
  async logout() {
    return null;
  }
}

export default new AuthController();
