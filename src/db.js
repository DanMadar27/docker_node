const { Pool } = require('pg');

const config = require('./config');

// connect to postgres
const pool = new Pool({
  user: config.DB_USER,
  host: config.DB_HOST,
  database: config.DB_NAME,
  password: config.DB_PASSWORD,
  port: config.DB_PORT,
});

async function init() {
  try {
    console.log('initializing db');
    
    await createCountersTable();
    await createCounterRow('counter');  

    console.log('db initialized');

    return true;
  }
  catch(err) {
    console.error(err.stack);

    return false;
  }
}

function getPool() {
  return pool;
}

async function createCountersTable() {
  // create table if it doesn't exist
  return pool.query(`
    CREATE TABLE IF NOT EXISTS counters (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      value INTEGER NOT NULL DEFAULT 0
    )
  `);
}

async function createCounterRow(name) {
  // create row if it doesn't exist
  return pool.query(`
    INSERT INTO counters (name)
    SELECT CAST($1 AS VARCHAR)
    WHERE NOT EXISTS (
      SELECT 1 FROM counters WHERE name = CAST($1 AS VARCHAR)
    )
  `, [name]);
}

module.exports = {
  init,
  getPool,
};