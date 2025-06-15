import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();
const filePath = path.join(__dirname, "../db/todos.json");

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to todo app");
});

// Get all file from DB
app.get("/todos", (req: Request, res: Response) => {
    const data = fs.readFileSync(filePath, {encoding: "utf-8"});
    res.json(data)
});

// Get query and params from request
app.get("/todos/:title/:body", (req:Request, res:Response)=>{
    console.log("From parameter",req.params);
    console.log("From Query",req.query)
})

app.post("/todos/create-todo", (req,res) => {
    const data = req.body;
    console.log(data)
})

export default app;
