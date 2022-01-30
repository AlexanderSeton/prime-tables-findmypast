// function that takes in a numerical value, then will output an array of primes (smallest to largest) of the specified length, that are contained in this range of natural numbers
// function uses the Seive of Eratosthenes algorithm. This is an algorithm that will find all the prime numbers up to (and including) a specified natural number.

function seiveOfEratosthenes(naturalNumbersNeeded, numberPrimesNeeded) {
    const primes = [];
    // generate an array of boolean value trues, from indexes 0 to naturalNumbersNeeded
    // these elements do not need numeric values as their index can be used. This is why we add 1 to the number of naturals needed, to represent 0
    const naturalNumbersArray = new Array(naturalNumbersNeeded + 1).fill(true);
    // set the elements at index 0 and 1 to false, because 0 and 1 are not primes
    naturalNumbersArray[0] = false;
    naturalNumbersArray[1] = false;
    // loop through the natural numbers up to the square root of the largest natural number in our range (starting at 2)
    for (let i=2; i<Math.sqrt(naturalNumbersArray.length); i++) {
        // if number/element is true (it's prime), then set all its multiples to false (not prime)
        if (naturalNumbersArray[i]) {
            for (let j=2; i*j<naturalNumbersArray.length; j++) {
                naturalNumbersArray[i*j] = false;
            }
        }
    }
    // loop through the natural numbers array and extract the specified amount from the function's argument (numberPrimesNeeded) of prime numbers (values that are true)
    naturalNumbersArray.forEach((number, index) => {
        // if the number is true then add it to the primes array
        if (number) {
            // checks that we still need more primes to meet the amount specified by the user before adding
            if (primes.length < numberPrimesNeeded) {
                // add the index to the list as this is the numerical value
                primes.push(index);
            }
        }
    })
    return primes;
}

module.exports = seiveOfEratosthenes;
