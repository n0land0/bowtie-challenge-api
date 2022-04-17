"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProjects = void 0;
const Project_1 = __importDefault(require("../models/Project"));
const getAllProjects = (request, response, next) => {
    Project_1.default.fetchAll();
};
exports.getAllProjects = getAllProjects;
