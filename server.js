var http = require('http');

http.createServer(function (request, response) {
    
    console.log("request.method = " + request.method);

    if (request.method == 'GET') {
        response.statusCode = 200;
        response.write("<h1>Well Received!</h1>")
    }

}).listen(3000, function () {
    console.log('Server listening to port 3000');
});