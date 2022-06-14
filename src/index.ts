import express from 'express';
import { Router, Request, Response, Express } from 'express';
import morgna from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import User from './routes/user';
import Auth from './routes/auth';
import Content from './routes/content';
import path from 'path';

const app: Express = express();
const route = Router();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgna('dev'));
app.use('/public', express.static(path.resolve(__dirname, '../public')));

//Routes
app.use(User);
app.use(Auth);
app.use(Content);

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' });
});

app.use(route);

app.listen(3331, () => 'server running on port 3331');
