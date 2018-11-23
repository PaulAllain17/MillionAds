exports.closest = function (number) {
    if (number < 2) {
        return 'Your number must be greater or equal to 2.';
    }
    if (isPrime(number)) {
        return 'Your number : ' + number + ' is a prime number.';
    }
    let lowerPrime, higherPrime;
    let counter = 1;
    if (number % 2 !== 0) {
        counter = 2;
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
        counter += 2;
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
