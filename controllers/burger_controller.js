var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
var bodyParser = require("body-parser");

// Create routes




// Index Page (render all burgers to DOM)
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);

  });
});


router.post("/some/resource/path", function(req, res) {
  res.send();
})


// Create a New Burger
router.post('/api/burger', function(req, res) {
  burger.insertOne([

      "burger_name", "devoured"
    ],

    [
      req.body.burger_name, req.body.devoured
    ],
    function(result) {
      res.json({
        id: result.inserId
      });
    });
});


// Devour a Burger
router.put('/api/burger/:id', function(req, res) {
  var condition = "id =" + req.params.id
  burger.updateOne({
      devoured: true
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }

    });
});
router.delete("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  
  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// ----------------------------------------------------


// Export route
module.exports = router;
