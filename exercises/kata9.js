const camelCase = function (input) {
  //Seperate each word into their own indices in an array
  const [firstWord, ...restWords] = input.split(" ");
  return firstWord.toLowerCase() + restWords.map(letterChange).join("");
};

const letterChange = function (word) {
  const [first, ...rest] = word;
  return first.toUpperCase() + rest.join("").toLowerCase();
};
module.exports = { camelCase };
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
