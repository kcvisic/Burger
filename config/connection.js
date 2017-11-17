var mysql = require("mysql");
var credendtials = require('credentials.js');
var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || credendtials.HOST,
  user: process.env.MYSQL_USER || credendtials.MYSQL_USER,
  password: process.env.MYSQL_PASS || credendtials.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE || credendtials.MYSQL_DATABASE,
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;