"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRoute = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoDB_1 = require("../config/mongoDB");
exports.todosRoute = express_1.default.Router();
const filePath = path_1.default.join(__dirname, "../../db/todos.json");
exports.todosRoute.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongoDB_1.client.db("todosDB");
    const collection = yield db.collection("todos");
    const cursor = collection.find({});
    const todos = yield cursor.toArray();
    res.json(todos);
}));
exports.todosRoute.get("/:title/:body", (req, res) => {
    console.log("From parameter", req.params);
    console.log("From Query", req.query);
});
exports.todosRoute.post("/create-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongoDB_1.client.db("todosDB");
    const collection = yield db.collection("todos");
    const { title, description, priority } = req.body;
    yield collection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isCompleted: false
    });
    const cursor = collection.find({});
    const todos = yield cursor.toArray();
    res.json(todos);
}));
