const restify = require('restify');
const primeNumber = require('./primeNumberModule');
const port = process.env.PORT || 1337;

function respond(req, res, next) {
    let entry = req.params.number;
    if (!entry || isNaN(parseFloat(entry))) {
        res.send('Please give a number.');
    } else {
        res.send(primeNumber.closest(parseFloat(entry)));
    }
    next();
}

const server = restify.createServer();
server.get('/:number', respond);
server.get('/favicon.ico', (req, res) => res.status(204));

server.listen(port);