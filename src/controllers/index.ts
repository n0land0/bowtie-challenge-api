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
