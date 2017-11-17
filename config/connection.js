var mysql = require("mysql");
var credendtials = null;

// this file will only exist if we are running locally. If we run on heroku, our
// db configutation will be set in the environment variables which we read below
try {
    credendtials = require('credentials.js');
} catch (err) {
    credendtials = {
        HOST: "",
        MYSQL_USER: "",
        MYSQL_PASS: "",
        MYSQL_DATABASE: "",
    }

}


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