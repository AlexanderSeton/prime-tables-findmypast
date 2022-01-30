const assert = require("assert");
const generateNaturalNumbers = require("../natural_numbers_generator.js");

describe("Natural Number Generator Function", function() {

    it("Should output an array of 30 natural numbers, if 10 or less prime numbers are needed", function() {
        const actual = generateNaturalNumbers(10);
        const expected = new Array(31).fill(true);
        expected[0] = false;
        expected[1] = false;
        assert.deepStrictEqual(actual, expected);
    });

    it("Should output an array of 300 natural numbers, if 50 prime numbers are needed", function() {
        const actual = generateNaturalNumbers(50);
        const expected = new Array(301).fill(true);
        expected[0] = false;
        expected[1] = false;
        assert.deepStrictEqual(actual, expected);
    });

    it("Should output an array of 700 natural numbers, if 100 prime numbers are needed", function() {
        const actual = generateNaturalNumbers(100);
        const expected = new Array(701).fill(true);
        expected[0] = false;
        expected[1] = false;
        assert.deepStrictEqual(actual, expected);
    });

    it("Should output an array of 9200 natural numbers, if 1000 prime numbers are needed", function() {
        const actual = generateNaturalNumbers(1000);
        const expected = new Array(9201).fill(true);
        expected[0] = false;
        expected[1] = false;
        assert.deepStrictEqual(actual, expected);
    });

});
