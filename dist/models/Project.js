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
// import path from 'path';
class Project {
    constructor(projectName) {
        this.projectName = projectName;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const projectData = yield Project.fetchAll();
            let newId;
            if (projectData) {
                const { id } = projectData[projectData.length - 1];
                newId = id + 1;
                this.id = newId;
                this.todos = [];
                projectData[projectData.length] = this;
            }
            return fs_1.promises.writeFile(path_1.dataProjectsFile, JSON.stringify(projectData));
        });
    }
    static update(id, updatedProjectName, updatedTodos) {
        return __awaiter(this, void 0, void 0, function* () {
            const projectData = yield Project.fetchAll();
            const projectIndex = projectData.findIndex((project) => project.id === id);
            projectData[projectIndex] = {
                id,
                projectName: updatedProjectName,
                todos: updatedTodos,
            };
            return fs_1.promises.writeFile(path_1.dataProjectsFile, JSON.stringify(projectData));
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const projectData = yield Project.fetchAll();
            const projectIndex = projectData.findIndex((project) => project.id === id);
            projectData.splice(projectIndex, 1);
            return fs_1.promises.writeFile(path_1.dataProjectsFile, JSON.stringify(projectData));
        });
    }
    static fetchAll() {
        return fs_1.promises
            .readFile(path_1.dataProjectsFile)
            .then((data) => JSON.parse(data.toString()));
    }
}
exports.default = Project;
