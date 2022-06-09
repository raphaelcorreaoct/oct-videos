import express from "express";
import { Router, Request, Response, Express } from "express";

import User from "./user";

const app: Express = express();
const route = Router();
app.use(express.json());

//Routes
app.use(User);

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

app.use(route);

app.listen(3331, () => "server running on port 3331");
