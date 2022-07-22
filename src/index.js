const config = require('./config');

const app = require('express')();
const db = require('./db');

const routes = require('./routes');


function start(app) {
  console.log('starting server');

  // maybe need await here
  db.init();
  routes.init(app);

  console.log(`app listening on http://localhost:${config.APP_PORT}`)   
}

app.listen(config.APP_PORT, () => start(app));
