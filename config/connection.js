var mysql = require("mysql");
var credendtials = null;
var connection = null;

// we are running on Heroku because the DATABASE_URL environment variable is set...
if (process.env.DATABASE_URL) {
    connection = mysql.createConnection(process.env.DATABASE_URL);
}

// we are running locally and we create the connection based on out credential file...
else {

    // this file will only exist if we are running locally. 
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

    connection = mysql.createConnection({
        host: credendtials.HOST,
        user: credendtials.MYSQL_USER,
        password: credendtials.MYSQL_PASS,
        database: credendtials.MYSQL_DATABASE,
    });

}

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;