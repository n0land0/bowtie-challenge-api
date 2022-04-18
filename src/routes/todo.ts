import { Router } from 'express';

import {
  createNewTodo,
  deleteAllTodosInProject,
  deleteTodo,
  getAllTodosByProject,
  updateTodo,
} from '../controllers/todo';

const todoRouter = Router();

todoRouter.get('/projects/:projectId/todos', getAllTodosByProject);
todoRouter.post('/projects/:projectId/todos', createNewTodo);
todoRouter.patch('/projects/:projectId/todos/:todoId', updateTodo);
todoRouter.delete('/projects/:projectId/todos/:todoId', deleteTodo);
todoRouter.delete('/projects/:projectId/todos', deleteAllTodosInProject);

export default todoRouter;
