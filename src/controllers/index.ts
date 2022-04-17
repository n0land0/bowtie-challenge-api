import { NextFunction, Request, Response, Router } from 'express';

import Project from '../models/Project';

export const getAllProjects = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const projectsData = await Project.fetchAll();
    response.send(projectsData);
  } catch (error) {
    console.log(error);
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

    response.send(`New project ${projectName} created!`);
  } catch (error) {
    console.log(error);
  }
};

export const updateProject = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { projectId } = request.params;
    const { projectName, todos } = request.body;

    Project.save(+projectId, projectName, todos);

    response.send(`Project ${projectId} updated!`);
  } catch (error) {
    console.log(error);
  }
};
