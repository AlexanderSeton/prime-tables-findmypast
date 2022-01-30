// function that generates a 2D array (/matrix) that will represent the multiplication table

function generateMultiplicationTable(primesArray) {
    // calculate the length of the tables axis, they have +1 because the cell at [0, 0] will have no value
    const axisLength = primesArray.length + 1;
    // create a 2D array
    const multiplicationTable = Array(axisLength).fill().map(() => new Array(axisLength).fill(1));
    // set the first cell at [0, 0] to have null value
    multiplicationTable[0][0] = "";
    // set the top row of the table to equal the primes array except for the top-left cell
    for (let i=0; i<primesArray.length; i++) {
        multiplicationTable[0][i+1] = primesArray[i];
    }
    // set the leftmost column of the table to equal the primes array except for the top-left cell
    for (let i=0; i<primesArray.length; i++) {
        multiplicationTable[i+1][0] = primesArray[i];
    }
    // loop through the multiplication table and calculate & fill in the values
    for (let i=1; i<multiplicationTable.length; i++) {
        for (let j=1; j<multiplicationTable.length; j++) {
            multiplicationTable[i][j] = multiplicationTable[0][j] * multiplicationTable[i][0];
        }
    }
    return multiplicationTable;
}

module.exports = generateMultiplicationTable;
