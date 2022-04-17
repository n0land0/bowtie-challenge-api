import { Router } from 'express';

import { createNewTodo, getAllTodosByProject } from '../controllers/todo';

const todoRouter = Router();

todoRouter.get('/projects/:projectId/todos', getAllTodosByProject);
todoRouter.post('/projects/:projectId/todos', createNewTodo);

export default todoRouter;
