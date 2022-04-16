import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

// router.get('/', function (req, res, next) {
//   // res.render('index', { title: 'Express' });
// });

router.get('/projects');

export default router;
