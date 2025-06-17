import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { client } from "../config/mongoDB";
import { ObjectId } from "mongodb";

export const todosRoute = express.Router();
const filePath = path.join(__dirname, "../../db/todos.json");

todosRoute.get("/", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const cursor = collection.find({});
  const todos = await cursor.toArray();

  res.json(todos);
});
todosRoute.get("/:title/:body", (req: Request, res: Response) => {
  console.log("From parameter", req.params);
  console.log("From Query", req.query);
});
todosRoute.post("/create-todo", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const { title, description, priority } = req.body;
  await collection.insertOne({
    title: title,
    description: description,
    priority: priority,
    isCompleted: false,
  });

  const cursor = collection.find({});
  const todos = await cursor.toArray();

  res.json(todos);
});

todosRoute.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const data = await collection.findOne({ _id: new ObjectId(id) });

  res.json(data);
});

todosRoute.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  await collection.deleteOne({ _id: new ObjectId(id) });

  res.json({
    message: "deleted successful",
  });
});

todosRoute.put("/update-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const filter = { _id: new ObjectId(id) };
  const {title, description, priority, isCompleted} = req.body;

  const data = await collection.updateOne(filter, {$set: {
    title,
    description,
    priority,
    isCompleted
  }}, {
    upsert: true,
  });

  res.json(data);
});
