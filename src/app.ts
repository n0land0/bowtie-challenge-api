import cors from 'cors';
import express from 'express';

import Project from './models/Project';
import router from './routes';

const app = express();
app.set('port', process.env.PORT || 3001);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/api/v1', router);

// Project.fetchAll().then((response) => console.log(response));

app.listen(app.get('port'), () =>
  console.log(`App is running on ${app.get('port')}`)
);
