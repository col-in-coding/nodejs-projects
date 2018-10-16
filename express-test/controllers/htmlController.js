// need the body-parser module to parse the http request body
var bodyParser = require('body-parser');

var urlencodeParser = bodyParser.urlencoded({ extended: false });
var jsonPaser = bodyParser.json();

module.exports = function(app) {

    app.get('/', function(req, res) {
        // send template manually
        // res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World</h1></body></html>');
        // send through view engine
        res.render('index');
    });
    
    // passing parameters
    app.get('/person/:id', function(req, res) {
        res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
    });
    
    // Parse http request body using body-parser
    app.post('/person',urlencodeParser ,function(req, res) {
        res.send('Thank you');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });

    // Parse the json data
    // app.post('/personjson', jsonPaser, function(req, res) {
    //     res.send('Thank you for the json data!');
    //     console.log(req.body.firstname);
    //     console.log(req.body.lastname);
    // });
}