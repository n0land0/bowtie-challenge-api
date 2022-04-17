import { Router } from 'express';

import {
  createNewProject,
  getAllProjects,
  updateProject,
} from '../controllers';

const router = Router();

router.get('/projects', getAllProjects);
router.post('/projects', createNewProject);
router.patch('/projects/:projectId', updateProject);

export default router;
