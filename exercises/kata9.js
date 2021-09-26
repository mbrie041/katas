const camelCase = function (input) {
  //Seperate each word into their own indices in an array
  let newArray = input.split(" ");
  let slicedArray = newArray.slice(1);
  //Isolate the first word
  let firstWord = newArray.slice(0, 1);
  let returnedValue = [];
  //Convert the first letter of each following word into a capital
  for (let index of slicedArray) {
    for (let i = 0; i < index.length; i++) {
      if (i === 0) {
        returnedValue.push(index[i].toUpperCase());
      } else {
        returnedValue.push(index[i]);
      }
    }
  }
  //Add each following word to the first word
  let combined = firstWord + returnedValue;
  let combinedWithoutCommas = combined.replace(/,/g, "");

  //Return the combined words
  return combinedWithoutCommas.toString();
};
module.exports = { camelCase };
// Input
console.log(camelCase("this is a string"));
// console.log(camelCase("loopy lighthouse"));
// console.log(camelCase("supercalifragalisticexpialidocious"));
// Output
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious
