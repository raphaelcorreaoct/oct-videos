import express from 'express';
import { Router, Request, Response, Express } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import User from './routes/user';
import Auth from './routes/auth';

const app: Express = express();
const route = Router();
app.use(express.json());

//Routes
app.use(User);
app.use(Auth);

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' });
});

app.use(route);

app.listen(3331, () => 'server running on port 3331');
