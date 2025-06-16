"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const todos_routes_1 = require("./app/todos.routes");
const app = (0, express_1.default)();
const filePath = path_1.default.join(__dirname, "../db/todos.json");
// For routing
app.use('/todos', todos_routes_1.todosRoute);
// todosRoute act like a [app]
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("welcome to todo app");
});
exports.default = app;
