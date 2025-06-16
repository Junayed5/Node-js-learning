import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { client } from '../config/mongoDB';


export const todosRoute = express.Router();
const filePath = path.join(__dirname, "../../db/todos.json");

todosRoute.get('/', async(req:Request, res: Response) => {
    const db = await client.db("todosDB");
    const collection = await db.collection("todos");

    const cursor = collection.find({});
    const todos = await cursor.toArray();

    res.json(todos)
})
todosRoute.get("/:title/:body", (req:Request, res:Response)=>{
    console.log("From parameter",req.params);
    console.log("From Query",req.query)
})
todosRoute.post("/create-todo", async(req:Request, res:Response) => {
    
    const db =await client.db("todosDB");
    const collection =await db.collection("todos");

    const {title, description, priority} = req.body;
    await collection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isCompleted: false
    });
   

    const cursor = collection.find({})
    const todos = await cursor.toArray();

    res.json(todos);
})