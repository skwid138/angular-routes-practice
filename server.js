// requires
var express = require('express');
var bodyParser = require('body-parser');

// globals
var app = express();
var port = 6660;

// module use
app.use(express.static('public'));
app.use(bodyParser.json());


// routes


//listen
app.listen(port, function () {
    console.log('Server Listening on port: ', port);
});