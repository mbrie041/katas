/* eslint-disable space-before-function-paren */
// Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

const makeCase = function (input, caseOption) {
  let changedCaseOption = input;
  let caseOptionArray = [
    ["camel", camelCase],
    ["pascal", pascalCase],
    ["snake", snakeCase],
    ["kebab", kebabCase],
    ["title", titleCase],
    ["vowel", vowelCase],
    ["consonant", consonantCase],
    ["upper", upperCase],
    ["lower", lowerCase],
  ];
  for (const [caseInput, caseFunction] of caseOptionArray) {
    if (caseOption.includes(caseInput)) {
      changedCaseOption = caseFunction(changedCaseOption);
    }
  }
  return changedCaseOption;
};

const capitalizeOnlyFirstChar = function (word) {
  const [first, ...rest] = word;
  return first.toUpperCase() + rest.join("").toLowerCase();
};

const camelCase = function (input) {
  const [firstWord, ...restWords] = input.split(" ");
  return (
    firstWord.toLowerCase() + restWords.map(capitalizeOnlyFirstChar).join("")
  );
};

const pascalCase = function (input) {
  const words = input.split(" ");
  return words.map(capitalizeOnlyFirstChar).join("");
};

const snakeCase = function (input) {
  return input.toLowerCase().split(" ").join("_");
};

const kebabCase = function (input) {
  return input.toLowerCase().split(" ").join("-");
};

const titleCase = function (input) {
  const words = input.split(" ");
  return words.map(capitalizeOnlyFirstChar).join(" ");
};

const vowelCase = function (input) {
  const vowels = "aeiou";
  const [...words] = input;

  const returnedValue = words.map((letter) => {
    if (vowels.includes(letter)) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  });
  return returnedValue.join("");
};

const consonantCase = function (input) {
  const vowels = "aeiou";
  const [...words] = input;

  const returnedValue = words.map((letter) => {
    if (!vowels.includes(letter)) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  });

  return returnedValue.join("");
};

const upperCase = function (input) {
  return input.toUpperCase();
};

const lowerCase = function (input) {
  return input.toLowerCase();
};
module.exports = {makeCase};
// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));
