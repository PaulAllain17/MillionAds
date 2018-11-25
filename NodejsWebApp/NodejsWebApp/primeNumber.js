exports.closest = (number) => {
    if (isPrime(number)) {
        return 'Your number : ' + number + ' is a prime number.';
    }
    let primes = getClosestPrimeNumbers(number);

    return 'The lower prime number is: ' + primes[0] +
        ' The higher prime number is: ' + primes[1];
};

isPrime = (value) => {
    const sqrtOfValue = parseInt(Math.sqrt(value));
    for (let i = 2; i < sqrtOfValue + 1; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

getClosestPrimeNumbers = (number) => {
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

    return [lowerPrime, higherPrime];
}