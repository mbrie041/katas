/* eslint-disable space-before-function-paren */
// Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

const makeCase = function (input, caseOption) {
  let changedCaseOption = input;
  if (caseOption.includes("camel")) {
    changedCaseOption = camelCase(changedCaseOption);
  }
  if (caseOption.includes("pascal")) {
    changedCaseOption = pascalCase(changedCaseOption);
  }
  if (caseOption.includes("snake")) {
    changedCaseOption = snakeCase(changedCaseOption);
  }
  if (caseOption.includes("kebab")) {
    changedCaseOption = kebabCase(changedCaseOption);
  }
  if (caseOption.includes("title")) {
    changedCaseOption = titleCase(changedCaseOption);
  }
  if (caseOption.includes("vowel")) {
    changedCaseOption = vowelCase(changedCaseOption);
  }
  if (caseOption.includes("consonant")) {
    changedCaseOption = consonantCase(changedCaseOption);
  }
  if (caseOption.includes("upper")) {
    changedCaseOption = upperCase(changedCaseOption);
  }
  if (caseOption.includes("lower")) {
    changedCaseOption = lowerCase(changedCaseOption);
  }
  return changedCaseOption;
};

const letterChange = function (word) {
  const [first, ...rest] = word;
  return first.toUpperCase() + rest.join("").toLowerCase();
};

const camelCase = function (input) {
  const [firstWord, ...restWords] = input.split(" ");
  return firstWord.toLowerCase() + restWords.map(letterChange).join("");
};

const pascalCase = function (input) {
  const [...restWords] = input.split(" ");
  return restWords.map(letterChange).join("");
};

const snakeCase = function (input) {
  return input.toLowerCase().split(" ").join("_");
};

const kebabCase = function (input) {
  return input.toLowerCase().split(" ").join("-");
};

const titleCase = function (input) {
  const [...restWords] = input.split(" ");
  return restWords.map(letterChange).join(" ");
};

const vowelCase = function (input) {
  const vowels = "aeiou";
  const [...restWords] = input;

  const returnedValue = restWords.map((letter) => {
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
  const [...restWords] = input;

  const returnedValue = restWords.map((letter) => {
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
