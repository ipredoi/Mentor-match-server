const { Pool } = require("pg");


const pool = new Pool({
	connectionString:process.env.DATABASE_URL,
	ssl: { rejectUnauthorized: false },
});

module.exports = {
	query: (text, params, cb) => {
		return pool.query(text, params, cb);
	},
};

