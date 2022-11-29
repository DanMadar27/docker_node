const pool = require('./db').getPool();

async function get() {
  return pool.query(`
    SELECT * FROM counters WHERE name = 'counter'
  `);
}

async function getCounters(req, res) {
  try {
    const counters = (await get()).rows;

    if(counters.length && counters[0].id) {
      increaseValue(counters[0].id);
    }

    res.json(counters);
  }
  catch(err) {
    console.log(err.stack);
  }
}

async function increaseValue(id) {
  return pool.query(`
    UPDATE counters SET value = value + 1 WHERE id = $1
  `, [id]);
}

module.exports = {
  get,
  getCounters,
};