const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "a1b9h9i1s", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
//   password: "a1b9h9i1s",
// });

// module.exports = pool.promise();
