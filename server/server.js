var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/../Client/dist'));

app.listen(3500, function() {
	console.log('listening on port 3500!');
});