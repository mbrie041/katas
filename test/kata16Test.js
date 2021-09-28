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

  it("Kata16 should return the input in snake case when the caseOption is snake", function () {
    let result = makeCase("this is a string", "snake");
    assert.equal(result, "this_is_a_string");
  });

  it("Kata16 should return the input in kebab case when the caseOption is kebab", function () {
    let result = makeCase("this is a string", "kebab");
    assert.equal(result, "this-is-a-string");
  });
});
//Expected output
// thisIsAString camel x
// ThisIsAString pascal x
// this_is_a_string snake x
// this-is-a-string kebab x
// This Is A String title
// thIs Is A strIng vowel
// THiS iS a STRiNG consonant
// THIS_IS_A_STRING ["upper", "snake"]
