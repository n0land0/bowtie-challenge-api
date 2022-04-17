import { Router } from 'express';

import {
  createNewProject,
  deleteProject,
  getAllProjects,
  updateProject,
} from '../controllers/project';

const router = Router();

router.get('/projects', getAllProjects);
router.post('/projects', createNewProject);
router.patch('/projects/:projectId', updateProject);
router.delete('/projects/:projectId', deleteProject);

export default router;
