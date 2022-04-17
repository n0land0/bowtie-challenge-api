import { Router } from 'express';

import { createNewProject, getAllProjects } from '../controllers';

const router = Router();

router.get('/projects', getAllProjects);
router.post('/projects', createNewProject);

export default router;
