var express = require("express");
var app = express();
var http = require("http");
const path = require('path');
var morgan = require("morgan");
var bodyParser = require("body-parser");

//vulnerability patching for security
app.disable('x-powered-by');

//security cookies
var credentials = require('./components/credentials.js');
app.use(require('cookie-parser')(credentials.cookieSecret));

//set backend port
app.set('PORT', process.env.PORT || 8080);

//Middleware
app.use(express.static(path.join('/var/www/html/build/')));

//render webpages
app.get('/', (req, res) => {
	res.sendFile(path.join('/var/www/html/build/index.html'));
})

//Start listening on port 8080
app.listen(app.get('PORT'), function(){
	console.log("Server started on port: " + app.get('PORT'));
})
