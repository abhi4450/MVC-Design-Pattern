const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://abhishekcareer1993:aC8jqUcCWRJp0u64@cluster0.enfqfx7.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("node-complete", "root", "a1b9h9i1s", {
//   dialect: "mysql",
//   host: "localhost",
// });

// module.exports = sequelize;
// // const mysql = require("mysql2");

// // const pool = mysql.createPool({
// //   host: "localhost",
// //   user: "root",
// //   database: "node-complete",
// //   password: "a1b9h9i1s",
// // });

// // module.exports = pool.promise();
