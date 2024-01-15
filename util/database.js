const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "a1b9h9i1s",
});

module.exports = pool.promise();
