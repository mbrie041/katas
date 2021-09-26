const assert = require("chai").assert;
const camelCase = require("../exercises/Kata9.js").camelCase;

describe("Kata9", function () {
  it("Kata9 should return hello", function () {
    let result = camelCase();
    assert.equal(result, "hello");
  });
});
