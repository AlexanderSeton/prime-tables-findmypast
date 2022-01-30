// function that will create an array of natural numbers (& starting with 0) containing the required amount of primes
// number of natural numbers required will be estimated using the prime number theorem

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
    // generate an array of boolean value trues, from indexes 0 to naturalNumbersNeeded
    // this will be used by the seive function, the elements do not need numeric values as their index can be used for the same things. This is why we add 1 to the length of the array below, to represent 0
    const naturalNumbersArray = new Array(naturalNumbersNeeded + 1).fill(true);
    // set the elements at index 0 and 1 to false, because 0 and 1 are not primes
    naturalNumbersArray[0] = false;
    naturalNumbersArray[1] = false;
    return naturalNumbersArray;
}

module.exports = generateNaturalNumbers;
