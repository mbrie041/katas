// Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

const makeCase = function (input, caseOption) {
  // const precedence = [];
  const [firstWord, ...restWords] = input.split(" ");
  return firstWord.toLowerCase() + restWords.map(letterChange).join("");
  //return a string
  //Check through the caseOption to order the casing styles by the following precedence:
  // 1. camel, pascal, snake, kebab, title
  // 2. vowel, consonant
  // 3. upper, lower
  //push the caseOption to a new array
  //iterate through the new array and format the input based on values in the array
};

const letterChange = function (word) {
  const [first, ...rest] = word;
  return first.toUpperCase() + rest.join("").toLowerCase();
};

const precedenceCheck = function (caseOption, precedence) {
  if (typeof caseOption === Array) {
    for (const caseValue in caseOption) {
      if (
        caseValue === "camel" ||
        caseValue === "pascal" ||
        caseValue === "snake" ||
        caseValue === "kebab" ||
        caseValue === "title"
      ) {
        precedence.push(precedence);
      }
    }
  }
};

module.exports = { makeCase };
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
