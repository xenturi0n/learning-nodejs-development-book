var http = require('http');

// function webServer(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.end('<h1>Hola Node.js</h1>')
// }

// http
//     .createServer(webServer)
//     .listen(3000, 'localhost')

// console.log('Server running at http://127.0.0.1:3000')

http.createServer((request, response) => {

    console.log(request.method);

    request.on('error', (err) => {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });

    response.on('error', () => {
        console.error(err);
    });

    if (request.method === 'POST' && request.url === '/echo') {
        // request.pipe(response);
        response.end('Hola mundo')
    } else {
        response.statusCode = 400;
        response.end();
    }

}).listen(8080, 'localhost');