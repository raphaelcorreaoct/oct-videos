import express from 'express';
import { Request, Response } from 'express';
import AuthController from '../../controllers/AuthController';

const router = express.Router();

// Verificar se o usuário tem o um token válido
router.get('/auth', (req: Request, res: Response) => {
  res.json({
    message: 'User',
  });
});

// faz o login do usuário
router.post('/auth', AuthController.login);

// Faz o logout do usuário
router.get('/auth/logout', (req: Request, res: Response) => {
  res.json({
    message: 'User',
  });
});

export default router;
