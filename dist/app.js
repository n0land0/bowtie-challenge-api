"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = __importDefault(require("./models/Project"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 3001);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use('/api/v1', routes_1.default);
Project_1.default.fetchAll().then((response) => console.log(response));
app.listen(app.get('port'), () => console.log(`App is running on ${app.get('port')}`));
