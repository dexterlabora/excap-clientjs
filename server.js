// Node JS development web server

var express = require("express");
var app = express();

// Express Midleware  - BodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// serve static public site files
app.use(express.static('public'));

/* serves main page */
app.get("/", function(req, res) {
   res.sendfile('public/index.html')
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
