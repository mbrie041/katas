const assert = require("chai").assert;
const makeCase = require("../exercises/kata16.js").makeCase;

describe("Kata16", function () {
  it("Kata16 should return type string", function () {
    let result = makeCase("this is a string", "camel");
    assert.typeOf(result, "string");
  });

  it("Kata16 should return camel case when the caseOption is camel", function () {
    let result = makeCase("this is a string", "camel");
    assert.equal(result, "thisIsAString");
  });

  it("Kata16 should return the input in pascal case when the caseOption is pascal", function () {
    let result = makeCase("this is a string", "pascal");
    assert.equal(result, "ThisIsAString");
  });
});
//Expected output
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING
