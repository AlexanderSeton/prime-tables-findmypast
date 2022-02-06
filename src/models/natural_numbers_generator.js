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
        let naturalRangeMax = 100;
        while(!found) {
            // define a range of natural numbers
            naturalNumbersNeeded = naturalRangeMax;
            // use the prime factor theorem to estimate the amount of primes in the range of numbers defined above
            let estimatedNumberPrimes = Math.ceil(naturalNumbersNeeded / Math.log(naturalNumbersNeeded));
            // check if there will be enough primes in the range of natural numbers
            if (estimatedNumberPrimes >= numberPrimesNeeded) {
                found = true;
            }
            // not enough primes estimated to be in the given natural numbers range
            else {
                // check what percent of desired number of primes is estimated to be contained in the given range
                let percentEstimated = (estimatedNumberPrimes / numberPrimesNeeded).toFixed(2);
                // decrease percentage a little when very close to target amount, to avoid lots of small increases in the number of naturals
                if (percentEstimated >= 0.95) {
                    percentEstimated -= 0.01;
                }
                // use the estimated percent above to calculate the number of naturals needed to get 100% of the prime number needed
                let naturalsEstimated = Math.ceil(naturalNumbersNeeded / percentEstimated);
                naturalRangeMax = naturalsEstimated;
            }
        }
    }
    return naturalNumbersNeeded;
}

module.exports = generateNaturalNumbers;
