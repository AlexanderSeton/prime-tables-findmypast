// function that will return the maximum natural number of a range that contains the required amount of primes.
// number of natural numbers required will be estimated using the prime number theorem.

function generateNaturalNumbers(numberPrimesNeeded) {
    let naturalNumbersNeeded = 0;
    // handle if only a small amount of primes are required
    if (numberPrimesNeeded <= 10) {
        // 10 primes in numbers 0 to 30
        naturalNumbersNeeded = 30;
    }
    // handle larger amounts of primes needed
    else {
        let found = false;
        let iteration = 1;
        while(!found) {
            // define a range of natural numbers
            naturalNumbersNeeded = 100 * iteration;
            // use the prime factor theorem to estimate the amount of primes in the range of numbers defined above
            let estimatedNumberPrimes = Math.ceil(naturalNumbersNeeded / Math.log(naturalNumbersNeeded));
            // check if there will be enough primes in the range of natural numbers
            if (estimatedNumberPrimes >= numberPrimesNeeded) {
                found = true;
            } else {
                iteration ++;
            }
        }
    }
    return naturalNumbersNeeded;
}

module.exports = generateNaturalNumbers;
