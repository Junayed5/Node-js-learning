"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_routes_1 = require("./app/todos.routes");
const app = (0, express_1.default)();
// For routing
app.use(express_1.default.json());
app.use('/todos', todos_routes_1.todosRoute);
// todosRoute act like a [app]
app.get("/", (req, res, next) => {
    console.log("inside middleware");
    next();
}, (req, res) => {
    res.send("welcome to todo app");
});
app.use((error, req, res, next) => {
});
exports.default = app;
