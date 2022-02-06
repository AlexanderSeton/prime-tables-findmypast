const assert = require("assert");
const generateNaturalNumbers = require("../natural_numbers_generator.js");

describe("Natural Number Generator Function", function() {

    it("Should return 30, if 10 or less prime numbers are needed", function() {
        const actual = generateNaturalNumbers(10);
        assert.deepStrictEqual(actual, 30);
    });

    it("Should return 300, if 50 prime numbers are needed", function() {
        const actual = generateNaturalNumbers(50);
        assert.deepStrictEqual(actual, 281);
    });

    it("Should return 700, if 100 prime numbers are needed", function() {
        const actual = generateNaturalNumbers(100);
        assert.deepStrictEqual(actual, 646);
    });

    it("Should return 9200, if 1000 prime numbers are needed", function() {
        const actual = generateNaturalNumbers(1000);
        assert.deepStrictEqual(actual, 9200);
    });

});
