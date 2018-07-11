var fs = require('fs');

var myReadStream = fs.createReadStream('./readMe.txt', 'utf8');

myReadStream.on('data', function(chunk) {
    console.count('Chunk: ');
    console.log(chunk.length);
    console.log('New Chunk Received');
    console.log(chunk);
});