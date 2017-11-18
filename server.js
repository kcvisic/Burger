var express = require("express");
var bodyParser = require("body-parser");
var method = require("method-override")

var app = express();
 var port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

app.listen(port, function() {
  console.log("listening on port", port);
});
