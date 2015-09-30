// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require("passport");
// var usersController = require('/controllers/users');
// var dayController = require('/controllers/days');
var staticsController = require('controllers/static.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_node_with_auth'); 

var Day = require('./app/models/day');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

var routes = require('./config/routes');
app.use(routes);

// ROUTES FOR OUR API
// =============================================================================
// var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);