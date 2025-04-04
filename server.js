var http = require('http');
const itemsJson = require('./items.json')

http.createServer(function (request, response) {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    console.log("request.method = " + request.method);

    if (request.method === 'GET') {

        response.setHeader('Content-Type', "application/json");
        response.setHeader('Content-Type', 'application/json');
        response.statusCode = 200;
        response.write(JSON.stringify(itemsJson));
        response.end();
        console.log("GET: returned");
        console.log(itemsJson);
    }

    if (request.method === 'PUT') {

        var newItemName = request.query.newItemName;
        var newItemPrice = request.query.newItemPrice;

        if (!newItemName) {
            console.log('PUT: newItemName is invalid');
            response.statusCode = 404;
            response.end();
        }

        if (!newItemPrice) {
            console.log('PUT: newItemPrice is invalid');
            response.statusCode = 404;
            response.end();
        }

        var newId = (new Date(Date.now())).toISOString;
        itemsJson.push({ "id": newId, "name": newItemName, "price": newItemPrice });
        response.statusCode = 200;
        response.end()
    }

}).listen(3000, function () {
    console.log('Server listening to port 3000');
});