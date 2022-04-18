import { NextFunction, Request, Response } from 'express';

import Project from '../models/Project';
import Todo from '../models/Todo';
import { deleteAllTodosInProject } from './todo';

export const getAllProjects = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const projectsData = await Project.fetchAll();
    response.status(200).send(projectsData);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};

export const createNewProject = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { projectName } = request.body;
    const newProject = new Project(projectName);

    newProject.create();

    response.status(200).json(`New project ${projectName} created!`);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};

export const updateProject = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { projectId } = request.params;
    const { projectName } = request.body;

    Project.update(+projectId, projectName);

    response.status(200).json(`Project ${projectId} updated!`);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};

export const deleteProject = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { projectId } = request.params;

    await Todo.deleteAllByProjectId(+projectId);

    Project.delete(+projectId);

    response.status(200).json(`Project ${projectId} has been deleted.`);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};
