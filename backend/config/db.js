var mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "1234",
  port: 3306,
  database: "movie_board2",
});

module.exports = db;
