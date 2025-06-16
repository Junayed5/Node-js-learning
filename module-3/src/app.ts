import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { todosRoute } from "./app/todos.routes";

const app: Application = express();
const filePath = path.join(__dirname, "../db/todos.json");

// For routing
app.use('/todos', todosRoute);

// todosRoute act like a [app]


app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to todo app");
});

export default app;
