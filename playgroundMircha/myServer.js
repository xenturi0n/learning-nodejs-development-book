const http = require('http');


var server = http.createServer((req, res) => {
    console.log(req.method);

    req.on('data', (chunk) => {
        console.log(chunk.toString());
    });

    req.on('end', () => {
        // console.log(req);
        console.log('require END');
        res.end();
    })
});

server.listen({ port: 3000, host: 'localhost' })