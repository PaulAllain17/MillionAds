const restify = require('restify');
var port = process.env.PORT || 1337;

function respond(req, res, next) {
    res.send('Your number is: ' + req.params.number);
    next();
}

var server = restify.createServer();
server.get('/:number', respond);

server.listen(port);