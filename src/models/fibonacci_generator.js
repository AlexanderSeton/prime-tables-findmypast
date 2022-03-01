// fibonacci number generator

function fibonacciGenerator(numberFibonacciNumbersNeeded) {
    const output = [];
    for (let i=0; i<numberFibonacciNumbersNeeded; i++) {
        if (output.length === 0) {
            output.push(0);
        } else if (output.length < 2) {
            output.push(1);
        } else {
            let newNumber = output[output.length - 1] + output[output.length - 2];
            output.push(newNumber);
        }
    }
    return output;
}

module.exports = fibonacciGenerator;
