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
    console.log(request.body);
    const { projectName } = request.body;
    const newProject = new Project(projectName);
    newProject.save();
    console.log(Project.fetchAll());
    response.send(`New project ${projectName} saved!`);
  } catch (error) {
    console.log(error);
  }
};
