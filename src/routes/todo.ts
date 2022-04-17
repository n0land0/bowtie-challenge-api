import { Router } from 'express';

import {
  createNewTodo,
  getAllTodosByProject,
  updateTodo,
} from '../controllers/todo';

const todoRouter = Router();

todoRouter.get('/projects/:projectId/todos', getAllTodosByProject);
todoRouter.post('/projects/:projectId/todos', createNewTodo);
todoRouter.patch('/projects/:projectId/todos/:todoId', updateTodo);

export default todoRouter;
