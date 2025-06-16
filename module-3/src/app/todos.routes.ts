import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export const todosRoute = express.Router();
const filePath = path.join(__dirname, "../../db/todos.json");

todosRoute.get('/', (req:Request, res: Response) => {
    const data = fs.readFileSync(filePath, {encoding: "utf-8"});

    res.json({
        message: "From todo Route",
        data
    })
})
todosRoute.get("/:title/:body", (req:Request, res:Response)=>{
    console.log("From parameter",req.params);
    console.log("From Query",req.query)
})
todosRoute.post("/create-todo", (req,res) => {
    const data = req.body;
    console.log(data);

    res.send("Hello world!")
})