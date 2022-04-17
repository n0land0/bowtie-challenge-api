import { NextFunction, Request, Response, Router } from 'express';

import { getAllProjects } from '../controllers';

const router = Router();

router.get('/projects', getAllProjects);

export default router;
