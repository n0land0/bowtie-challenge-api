import express from 'express';

import router from './routes';

const app = express();
app.set('port', process.env.PORT || 3001);
app.use(router);

app.listen(app.get('port'), () =>
  console.log(`App is running on ${app.get('port')}`)
);
