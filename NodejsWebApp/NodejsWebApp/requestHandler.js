const primeNumber = require('./primeNumber');

exports.process = (req, res) => {
    let entry = req.params.number;
    if (!entry || isNaN(parseFloat(entry))) {
        res.send('Please give a number.');
        return;
    }
    const number = parseFloat(entry);
    if (number < 2) {
        res.send('Your number must be greater or equal to 2.');
        return;
    }
    res.send(primeNumber.closest(number));
}