// const assert = require("chai").assert;
// const camelCase = require("../exercises/kata9.js").camelCase;

// describe("Kata9", function () {
//   it("Kata9 should return type string", function () {
//     let result = camelCase("this is a string");
//     assert.typeOf(result, "string");
//   });

//   it("Kata9 should return a single word when given a single word", function () {
//     let result = camelCase("string");
//     assert.equal(result, "string");
//   });

//   it("Kata9 should return nothing when given an empty string", function () {
//     let result = camelCase("");
//     assert.equal(result, "");
//   });

//   it("Kata9 should return a single word when given a single word, regardless of complexity", function () {
//     let result = camelCase("supercalifragalisticexpialidocious");
//     assert.equal(result, "supercalifragalisticexpialidocious");
//   });

//   it("Kata9 should return a given string in camelcase", function () {
//     let result = camelCase("loopy lighthouse");
//     assert.equal(result, "loopyLighthouse");
//   });

//   it("Kata9 should return one word when given two word", function () {
//     let result = camelCase("is string");
//     assert.equal(result, "isString");
//   });

//   it("Kata9 should return one word when given three words", function () {
//     let result = camelCase("This is string");
//     assert.equal(result, "thisIsString");
//   });

//   it("Kata9 should return a given string in camelcase even if the string starts with an uppercase.", function () {
//     let result = camelCase("Loopy lighthouse");
//     assert.equal(result, "loopyLighthouse");
//   });

//   it("Kata9 should return a given string in camelcase even if the string has random uppercases throughout.", function () {
//     let result = camelCase("LoOPy liGhThouSe");
//     assert.equal(result, "loopyLighthouse");
//   });
// });
