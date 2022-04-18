import cors from 'cors';
import express from 'express';

import projectsRouter from './routes/project';
import todoRouter from './routes/todo';

const app = express();
app.set('port', process.env.PORT || 3001);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', projectsRouter);
app.use('/api/v1', todoRouter);

app.listen(app.get('port'), () =>
  console.log(`App is running on ${app.get('port')}`)
);
