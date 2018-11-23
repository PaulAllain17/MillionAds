var assert = require('assert');
const primeNumber = require('./primeNumberModule');

describe('The prime number module', function () {

    it('checks if number is greater or equal to 2', function () {
        assert.equal(primeNumber.closest(1), 'Your number must be greater or equal to 2.');
    });

    it('gives the given number if it is a prime number', function () {
        assert.equal(primeNumber.closest(13), 'Your number : 13 is a prime number.');
    });

    it('gives the lowest and highest prime number of the given number', function () {
        assert.equal(primeNumber.closest(12), 'The lower prime number is: 11 The higher prime number is: 13');
    });

});