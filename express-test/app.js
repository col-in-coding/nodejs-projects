var express = require('express');
var app = express();

// global environment
var port = process.env.PORT || 3000;

// midleware
app.use('/assets', express.static(__dirname + '/public'));
// do something between the request and response
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
})

app.get('/', function(req, res) {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World</h1></body></html>');
});

// passing parameters
app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body>Person: ' + 
    req.params.id +'</body></html>');
});

app.get('/api', function(req, res) {
    res.json({
        firstname: 'John',
        lastname: 'Doe'
    });
});


app.listen(port);