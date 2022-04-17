"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const project_1 = __importDefault(require("./routes/project"));
const todo_1 = __importDefault(require("./routes/todo"));
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 3001);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use('/api/v1', project_1.default);
app.use('/api/v1', todo_1.default);
app.listen(app.get('port'), () => console.log(`App is running on ${app.get('port')}`));
