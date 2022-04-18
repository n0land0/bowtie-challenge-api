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
exports.deleteAllTodosInProject = exports.deleteTodo = exports.updateTodo = exports.createNewTodo = exports.getAllTodosByProject = void 0;
const Todo_1 = __importDefault(require("../models/Todo"));
const getAllTodosByProject = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectId } = request.params;
        const todosData = yield Todo_1.default.fetchAllByProjectId(+projectId);
        response.status(200).send(todosData);
    }
    catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
});
exports.getAllTodosByProject = getAllTodosByProject;
const createNewTodo = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectId, todoDescription } = request.body;
        const newTodo = new Todo_1.default(todoDescription);
        newTodo.create(projectId);
        response
            .status(200)
            .json(`New todo ${todoDescription} created in project ${projectId}!`);
    }
    catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
});
exports.createNewTodo = createNewTodo;
const updateTodo = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectId, todoId } = request.params;
        const { description, completed } = request.body;
        Todo_1.default.update(+todoId, +projectId, description, completed);
        response
            .status(200)
            .json(`Todo ${todoId} in project ${projectId} updated!`);
    }
    catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { todoId, projectId } = request.params;
        Todo_1.default.delete(+todoId);
        response
            .status(200)
            .json(`Todo ${todoId} in project ${projectId} has been deleted.`);
    }
    catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
});
exports.deleteTodo = deleteTodo;
const deleteAllTodosInProject = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectId } = request.params;
        yield Todo_1.default.deleteAllByProjectId(+projectId);
        response
            .status(200)
            .json(`All todos in project ${projectId} have been deleted.`);
    }
    catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
});
exports.deleteAllTodosInProject = deleteAllTodosInProject;
