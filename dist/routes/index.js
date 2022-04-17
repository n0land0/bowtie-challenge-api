"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get('/projects', controllers_1.getAllProjects);
router.post('/projects', controllers_1.createNewProject);
exports.default = router;
