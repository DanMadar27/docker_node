const counters = require('./counters');

function init(app) {
  app.get('/', (req, res ) => 
    res.json({ message: 'Welcome' }) 
  );

  app.get('/counters', counters.getCounters);
}


module.exports = {
  init,
};