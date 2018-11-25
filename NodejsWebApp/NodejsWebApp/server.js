const restify = require('restify');
const requestHandler = require('./requestHandler');
const port = process.env.PORT || 1337;

respond = (req, res, next) => {
    requestHandler.process(req, res);
    next();
}

const server = restify.createServer();
server.get('/:number', respond);
server.get('/favicon.ico', (req, res) => res.status(204));

server.listen(port);