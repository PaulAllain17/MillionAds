const restify = require('restify');
const requestHandler = require('./requestHandler');
const port = process.env.PORT || 8080;

respond = (req, res, next) => {
    requestHandler.process(req, res);
    next();
}

const server = restify.createServer();
server.get('/:number', respond);
server.get('/favicon.ico', (req, res) => res.status(204));

server.listen(port);
console.log('The server is listening to port ' + port);
console.log('Use the following url to communicate with the server: http://localhost:' + port + '/');
console.log('Provide a number after the /');