const { Pool } = require("pg");

// Again, this should be read from an environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // or your connection URI

});

module.exports = pool;