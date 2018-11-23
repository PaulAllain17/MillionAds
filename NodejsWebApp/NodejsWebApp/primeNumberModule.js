exports.closest = function (number) {
    let lowerPrime, higherPrime;
    let counter = 1;
    if (isPrime(number)) {
        return 'You number : ' + number + ' is a prime number.';
    }
    while (!(lowerPrime && higherPrime)) {

        if (!higherPrime) {
            if (isPrime(number + counter)) {
                higherPrime = number + counter;
            }
        }
        if (!lowerPrime) {
            if (isPrime(number - counter)) {
                lowerPrime = number - counter;
            }
        }
        counter++
    }

    return 'The lower prime number is: ' + lowerPrime +
        ' The higher prime number is: ' + higherPrime;
};

function isPrime(value) {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
