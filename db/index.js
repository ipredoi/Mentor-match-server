const { Pool } = require("pg");

const pool = new Pool({
  ssl: { rejectUnauthorized: false },
});

module.exports = {
  query: (text, params, cb) => {
    return pool.query(text, params, cb);
  },
};
