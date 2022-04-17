import { NextFunction, Request, Response, Router } from 'express';

import Project from '../models/Project';

export const getAllProjects = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  Project.fetchAll();
};
