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
exports.updateProject = exports.createNewProject = exports.getAllProjects = void 0;
const Project_1 = __importDefault(require("../models/Project"));
const getAllProjects = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectsData = yield Project_1.default.fetchAll();
        response.send(projectsData);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllProjects = getAllProjects;
const createNewProject = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectName } = request.body;
        const newProject = new Project_1.default(projectName);
        newProject.create();
        response.send(`New project ${projectName} created!`);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createNewProject = createNewProject;
const updateProject = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectId } = request.params;
        const { projectName, todos } = request.body;
        Project_1.default.save(+projectId, projectName, todos);
        response.send(`Project ${projectId} updated!`);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateProject = updateProject;
