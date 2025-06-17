import express, { Application, NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { todosRoute } from "./app/todos.routes";

const app: Application = express();

// For routing
app.use(express.json())
app.use('/todos', todosRoute);

// todosRoute act like a [app]

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("inside middleware");
  next()
},
  (req,res) => {
    res.send("welcome to todo app");
  }
);

app.use((error, req,res, next) => {

})

export default app;
