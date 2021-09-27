const assert = require("chai").assert;
const makeCase = require("../exercises/kata16.js").makeCase;

describe("Kata16", function () {
  it("Kata16 should return type string", function () {
    let result = makeCase("this is a string", "camel");
    assert.typeOf(result, "string");
  });

  it("Kata16 should return the input in camel case", function () {
    let result = makeCase("this is a string", "camel");
    assert.equal(result, "thisIsAString");
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
