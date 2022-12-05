const counters = require('./counters');

function init(app) {
  app.get('/', (req, res ) => {
    console.log('get /');
    res.json({ message: 'Welcome' });
  }
  );

  app.get('/counters', counters.getCounters);
}

module.exports = {
  init,
};