import { NextFunction, Request, Response } from 'express';

import Todo from '../models/Todo';

export const getAllTodosByProject = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { projectId } = request.params;
    const todosData = await Todo.fetchAllByProjectId(+projectId);
    response.send(todosData);
  } catch (error) {
    console.log(error);
  }
};

export const createNewTodo = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { projectId, todoDescription } = request.body;
    const newTodo = new Todo(todoDescription);

    newTodo.create(projectId);

    response.send(
      `New todo ${todoDescription} created in project ${projectId}!`
    );
  } catch (error) {
    console.log(error);
  }
};