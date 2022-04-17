"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataTodosFile = exports.dataProjectsFile = void 0;
const path_1 = __importDefault(require("path"));
const fileName = (_a = require === null || require === void 0 ? void 0 : require.main) === null || _a === void 0 ? void 0 : _a.filename;
let rootDir = '';
if (fileName) {
    rootDir = path_1.default.dirname(fileName);
}
exports.dataProjectsFile = path_1.default.join(rootDir, '..', 'src', 'data', 'projects.json');
exports.dataTodosFile = path_1.default.join(rootDir, '..', 'src', 'data', 'todos.json');
