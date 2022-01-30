const assert = require("assert");
const seiveOfEratosthenes = require("../prime_seive.js");

describe("Prime Seive Function", function() {

    it("Should output an array containing 2 when asked for 1 prime number", function() {
        const actual = seiveOfEratosthenes(1);
        const expected = [2];
        assert.deepStrictEqual(actual, expected);
    });

    it("Should output an array containing 2 and 3 when asked for 2 prime numbers", function() {
        const actual = seiveOfEratosthenes(2);
        const expected = [2, 3];
        assert.deepStrictEqual(actual, expected);
    });

    it("Should output an array containing 2, 3 and 5 when asked for 3 prime numbers", function() {
        const actual = seiveOfEratosthenes(3);
        const expected = [2, 3, 5];
        assert.deepStrictEqual(actual, expected);
    });

    it("Should output an array containing the first ten prime numbers when asked for 10 prime numbers", function() {
        const actual = seiveOfEratosthenes(10);
        const expected = [2, 3, 5, 7, 9, 11, 13, 17, 19, 21];
        assert.deepStrictEqual(actual, expected);
    });

});
