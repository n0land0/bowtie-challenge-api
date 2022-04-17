import { Router } from 'express';

import {
  createNewProject,
  deleteProject,
  getAllProjects,
  updateProject,
} from '../controllers/project';

const projectsRouter = Router();

projectsRouter.get('/projects', getAllProjects);
projectsRouter.post('/projects', createNewProject);
projectsRouter.patch('/projects/:projectId', updateProject);
projectsRouter.delete('/projects/:projectId', deleteProject);

export default projectsRouter;
