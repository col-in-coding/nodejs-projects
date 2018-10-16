var express = require('express');
var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

// global environment
var port = process.env.PORT || 3000;



// midleware
app.use('/assets', express.static(__dirname + '/public'));
// do something between the request and response
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
})

app.set('view engine', 'ejs');

htmlController(app);
apiController(app);

app.listen(port);