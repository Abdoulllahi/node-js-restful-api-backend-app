var http = require('http');
const itemsJson = require('./items.json')

http.createServer(function (request, response) {
    
    response.setHeader('Content-Type', "application/json");
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    console.log("request.method = " + request.method);
    if (request.method == 'GET') {
        response.setHeader('Content-Type', 'application/json');
        response.statusCode = 200;
        response.write(JSON.stringify(itemsJson));
        response.end();
        console.log("GET: returned");
        console.log(itemsJson);
    }

}).listen(3000, function () {
    console.log('Server listening to port 3000');
});