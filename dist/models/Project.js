"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = require("../util/path");
// import path from 'path';
class Project {
    constructor(id, projectName, todos) {
        this.id = id;
        this.projectName = projectName;
        this.todos = todos;
    }
    static fetchAll() {
        fs_1.default.readFile(path_1.dataProjectsFile, (error, data) => {
            return JSON.parse(data.toString());
        });
    }
}
exports.default = Project;
