var bodyParser = require('body-parser');

module.exports = function(app) {

    app.get('/api/person/:id', function(req, res) {
        // get the data from database
        res.json({
            firstname: 'John',
            lastname: 'Doe'
        });
    });

    app.post('/api/person', function(){
        // save the person data to the database
    });

    app.delete('/api/person/:id', function(){
        // delete from database
    });
}