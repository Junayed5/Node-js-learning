"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRoute = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.todosRoute = express_1.default.Router();
const filePath = path_1.default.join(__dirname, "../../db/todos.json");
exports.todosRoute.get('/', (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    res.json({
        message: "From todo Route",
        data
    });
});
exports.todosRoute.get("/:title/:body", (req, res) => {
    console.log("From parameter", req.params);
    console.log("From Query", req.query);
});
exports.todosRoute.post("/create-todo", (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("Hello world!");
});
