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

function init() {
  console.log('initializing db');

  createCountersTable();
  createCounterRow('counter');  

  console.log('db initialized');
}

function getPool() {
  return pool;
}

function createCountersTable() {
  // create table if it doesn't exist
  pool.query(`
    CREATE TABLE IF NOT EXISTS counters (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      value INTEGER NOT NULL DEFAULT 0
    )
  `, (err, res) => {
    if (err) {
      console.log(err.stack);
    }
  }
  );
}

function createCounterRow(name) {
  // create row if it doesn't exist
  pool.query(`
  SELECT * FROM counters WHERE name = 'counter'
  `, (err, res) => {
  if(err) {
    console.log(err.stack);
  }
  if(res.rows.length === 0) {
    pool.query(`
      INSERT INTO counters (name, value) VALUES ('counter', 0)
    `, (err, res) => {
      if(err) {
        console.log(err.stack);
      }
    }
    );
  }
  }
  );
}

module.exports = {
  init,
  getPool,
};