const config = require('./config');

const app = require('express')();
const db = require('./db');

const routes = require('./routes');


async function start(app) {
  console.log('starting server');

  if(!(await db.init())) {
    console.log('failed to initialize db');
  }
  
  routes.init(app);

  console.log(`app listening on http://localhost:${config.APP_PORT}`)   
}

app.listen(config.APP_PORT, async () => await start(app));
