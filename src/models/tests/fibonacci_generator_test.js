const assert = require("assert");
const fibonacciGenerator = require("../fibonacci_generator.js");

describe("Fibonacci Numbers Generator Test", function() {

    it("Should output an array of 0, 1, 1 when asked to generator 3 numbers", function() {
        const expected = [0, 1, 1];
        const actual = fibonacciGenerator(3);
        assert.deepStrictEqual(actual, expected);
    });

    it("Should output an array of 0, 1, 1, 2, 3, 5 when asked to generator 6 numbers", function() {
        const expected = [0, 1, 1, 2, 3, 5];
        const actual = fibonacciGenerator(6);
        assert.deepStrictEqual(actual, expected);
    });

});
