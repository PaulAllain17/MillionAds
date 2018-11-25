const assert = require('assert');
const primeNumber = require('./primeNumber');

describe('The prime number module', () => {

    it('gives the given number if it is a prime number', () => {
        assert.equal(primeNumber.closest(13), 'Your number : 13 is a prime number.');
    });

    it('gives the lowest and highest prime number of the given number', () => {
        assert.equal(primeNumber.closest(12), 'The lower prime number is: 11 The higher prime number is: 13');
    });
});