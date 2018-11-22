const restify = require('restify');
var primeNumber = require('./primeNumberModule');
var port = process.env.PORT || 1337;

function respond(req, res, next) {
    var entry = req.params.number;
    if (!entry || isNaN(parseFloat(entry))) {
        res.send('Please give a number.');
        next();
    } else {
        res.send(primeNumber.closest(parseFloat(entry)));
        next();
    }
}

var server = restify.createServer();
server.get('/:number', respond);
server.get('/favicon.ico', (req, res) => res.status(204));

server.listen(port);