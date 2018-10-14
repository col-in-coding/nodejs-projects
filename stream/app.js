var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/note.txt', { encoding: 'utf8', highWaterMark: 1024 });

var writable = fs.createWriteStream(__dirname + '/notecopy.txt');

var compressed = fs.createWriteStream(__dirname + '/note.txt.gz');

// Compressing Stream
var gzip = zlib.createGzip();

// readable.on('data', function(chunk) {
//     console.log(chunk.length);
//     writable.write(chunk);
// });

readable.pipe(writable);

// read from the note file, compressed it, and write to file
readable.pipe(gzip).pipe(compressed);