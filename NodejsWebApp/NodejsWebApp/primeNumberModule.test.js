var assert = require('assert');
const primeNumber = require('./primeNumberModule');

describe('The prime number module', function () {
    it('gives the given number if it is a prime number', function () {
        assert.equal(primeNumber.closest(13), 'You number : 13 is a prime number.');
    });
});