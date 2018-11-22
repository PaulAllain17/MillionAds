const restify = require('restify');
var primeNumber = require('./primeNumberModule');
var port = process.env.PORT || 1337;

function respond(req, res, next) {
    res.send(primeNumber.closest(req.params.number));
    next();
}

var server = restify.createServer();
server.get('/:number', respond);

server.listen(port);