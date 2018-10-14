var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    // req: readable stream; res: writable stream

    if(req.url === '/') {
        // set http header
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        // read the template, dynamical template
        
        // a. Using synchronous read, this may block the process 
        // var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
        // var message = 'Hello world';
        // html = html.replace('{message}', message);
        // res.end(html);

        // b. Using Stream, send a chunk a time. to make the buffer stay small
        var html = fs.createReadStream(__dirname + '/index.html').pipe(res);
    }

    if(req.url === '/api') {
        // TO send json
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }



}).listen(1337, '127.0.0.1');