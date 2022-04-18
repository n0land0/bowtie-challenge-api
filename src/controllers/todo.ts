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

    response.json(
      `New todo ${todoDescription} created in project ${projectId}!`
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { projectId, todoId } = request.params;
    const { description, completed } = request.body;

    Todo.update(+todoId, +projectId, description, completed);

    response.json(`Todo ${todoId} in project ${projectId} updated!`);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { todoId, projectId } = request.params;

    Todo.delete(+todoId);

    response.json(`Todo ${todoId} in project ${projectId} has been deleted.`);
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllTodosInProject = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { projectId } = request.params;

    await Todo.deleteAllByProjectId(+projectId);

    response.json(`All todos in project ${projectId} have been deleted.`);
  } catch (error) {
    console.log(error);
  }
};
