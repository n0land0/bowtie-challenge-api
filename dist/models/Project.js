"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("../util/path");
const fs_1 = require("fs");
// import path from 'path';
class Project {
    constructor(id, projectName, todos) {
        this.id = id;
        this.projectName = projectName;
        this.todos = todos;
    }
    static fetchAll() {
        return fs_1.promises.readFile(path_1.dataProjectsFile).then((data) => JSON.parse(data.toString()));
    }
}
exports.default = Project;
