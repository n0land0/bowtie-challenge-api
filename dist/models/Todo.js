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
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("../util/path");
class Todo {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }
    create(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.projectId = projectId;
            const allTodos = yield Todo.fetchAll();
            let newId = 1;
            if (allTodos.length) {
                const { id } = allTodos[allTodos.length - 1];
                if (id)
                    newId = id + 1;
            }
            this.id = newId;
            allTodos[allTodos.length] = this;
            console.log(allTodos.length);
            return fs_1.promises.writeFile(path_1.dataTodosFile, JSON.stringify(allTodos));
        });
    }
    static update(id, projectId, updatedDescription, updatedCompleted) {
        return __awaiter(this, void 0, void 0, function* () {
            const todosData = yield Todo.fetchAll();
            const todoIndex = todosData.findIndex((todo) => todo.id === id);
            todosData[todoIndex] = {
                id,
                projectId,
                description: updatedDescription,
                completed: updatedCompleted,
            };
            return fs_1.promises.writeFile(path_1.dataTodosFile, JSON.stringify(todosData));
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const todosData = yield Todo.fetchAll();
            const todoIndex = todosData.findIndex((todo) => todo.id === id);
            todosData.splice(todoIndex, 1);
            return fs_1.promises.writeFile(path_1.dataTodosFile, JSON.stringify(todosData));
        });
    }
    static deleteAllByProjectId(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const todosData = yield Todo.fetchAll();
            const filteredTodosData = todosData.filter((todo) => todo.projectId !== projectId);
            return fs_1.promises.writeFile(path_1.dataTodosFile, JSON.stringify(filteredTodosData));
        });
    }
    static fetchAllByProjectId(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            return fs_1.promises
                .readFile(path_1.dataTodosFile)
                .then((data) => JSON.parse(data.toString()))
                .then((todosArray) => todosArray.filter((todo) => todo.projectId === projectId));
        });
    }
    static fetchAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return fs_1.promises
                .readFile(path_1.dataTodosFile)
                .then((data) => JSON.parse(data.toString()));
        });
    }
}
exports.default = Todo;
