"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controllers/todo");
const todoRouter = (0, express_1.Router)();
todoRouter.get('/projects/:projectId/todos', todo_1.getAllTodosByProject);
todoRouter.post('/projects/:projectId/todos', todo_1.createNewTodo);
exports.default = todoRouter;
