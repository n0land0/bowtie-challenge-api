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
    response.status(200).send(todosData);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
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

    response
      .status(200)
      .json(`New todo ${todoDescription} created in project ${projectId}!`);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
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

    response
      .status(200)
      .json(`Todo ${todoId} in project ${projectId} updated!`);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
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

    response
      .status(200)
      .json(`Todo ${todoId} in project ${projectId} has been deleted.`);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
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

    response
      .status(200)
      .json(`All todos in project ${projectId} have been deleted.`);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};
