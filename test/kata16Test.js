// /* eslint-disable space-before-function-paren */
// const assert = require("chai").assert;
// const makeCase = require("../exercises/kata16.js").makeCase;

// describe("Kata16", function () {
//   it("Kata16 should return type string", function () {
//     let result = makeCase("this is a string", "camel");
//     assert.typeOf(result, "string");
//   });

//   it("Kata16 should return camel case when the caseOption is camel", function () {
//     let result = makeCase("this is a string", "camel");
//     assert.equal(result, "thisIsAString");
//   });

//   it("Kata16 should return the input in pascal case when the caseOption is pascal", function () {
//     let result = makeCase("this is a string", "pascal");
//     assert.equal(result, "ThisIsAString");
//   });

//   it("Kata16 should return the input in snake case when the caseOption is snake", function () {
//     let result = makeCase("this is a string", "snake");
//     assert.equal(result, "this_is_a_string");
//   });

//   it("Kata16 should return the input in kebab case when the caseOption is kebab", function () {
//     let result = makeCase("this is a string", "kebab");
//     assert.equal(result, "this-is-a-string");
//   });

//   it("Kata16 should return the input in title case when the caseOption is title", function () {
//     let result = makeCase("this is a string", "title");
//     assert.equal(result, "This Is A String");
//   });

//   it("Kata16 should return the input in vowel case when the caseOption is vowel", function () {
//     let result = makeCase("this is a string", "vowel");
//     assert.equal(result, "thIs Is A strIng");
//   });
//   it("Kata16 should return the input in consonant case when the caseOption is consonant", function () {
//     let result = makeCase("this is a string", "consonant");
//     assert.equal(result, "THiS iS a STRiNG");
//   });

//   it("Kata16 should return the input in upper case when the caseOption is upper", function () {
//     let result = makeCase("this is a string", "upper");
//     assert.equal(result, "THIS IS A STRING");
//   });

//   it("Kata16 should return the input in lower case when the caseOption is lower", function () {
//     let result = makeCase("this is a string", "lower");
//     assert.equal(result, "this is a string");
//   });

//   it("Kata16 should return the input in the case which takes precedent first", function () {
//     let result = makeCase("this is a string", ["upper", "snake"]);
//     assert.equal(result, "THIS_IS_A_STRING");
//   });
// });
// //Expected output
// // thisIsAString camel x
// // ThisIsAString pascal x
// // this_is_a_string snake x
// // this-is-a-string kebab x
// // This Is A String title x
// // thIs Is A strIng vowel x
// // THiS iS a STRiNG consonant
// // THIS_IS_A_STRING ["upper", "snake"]
