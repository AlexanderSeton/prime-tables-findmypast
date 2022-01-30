const assert = require("assert");

describe("Natural Number Generator Function", function() {

    it("Should output an array of 30 natural numbers (& 0), if 10 or less prime numbers are needed", function() {
        const actual = generateNaturalNumbers(10);
        const expected = new Array(31).fill(true);
        assert.deepStrictEqual(actual, expected);
    });

});
