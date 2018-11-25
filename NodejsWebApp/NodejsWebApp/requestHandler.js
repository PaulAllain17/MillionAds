const primeNumber = require('./primeNumber');

exports.process = (req, res) => {
    let entry = req.params.number;
    if (!entry || isNaN(parseFloat(entry))) {
        res.send('Please give a number.');
    } else {
        res.send(primeNumber.closest(parseFloat(entry)));
    }
}