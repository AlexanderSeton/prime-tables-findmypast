const assert = require("assert");
const generateMultiplicationTable = require("../multiplication_table.js");
const seiveOfEratosthenes = require("../prime_sieve.js");
const generateNaturalNumbers = require("../natural_numbers_generator.js");

describe("Multiplication Table Function", function() {

    it("Should output a multiplication table matrix (2D array) for the primes 2, 3 and 5", function() {
        const naturalNumbersNeeded = generateNaturalNumbers(3);
        const primeNumbers = seiveOfEratosthenes(naturalNumbersNeeded, 3);
        const actual = generateMultiplicationTable(primeNumbers);
        const expected = [
            [ "", 2, 3, 5 ], 
            [ 2, 4, 6, 10 ], 
            [ 3, 6, 9, 15 ], 
            [ 5, 10, 15, 25 ] 
        ]
        assert.deepStrictEqual(actual, expected);    
    });

    it("Should produce an 11 by 11 table when 10 primes are inputted", function() {
        const naturalNumbersNeeded = generateNaturalNumbers(10);
        const primeNumbers = seiveOfEratosthenes(naturalNumbersNeeded, 10);
        const multiplicationTable = generateMultiplicationTable(primeNumbers);
        const actual = multiplicationTable.length;
        assert.strictEqual(actual, 11);
    });

});
