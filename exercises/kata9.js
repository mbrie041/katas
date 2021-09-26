const camelCase = function (input) {
  //Seperate each word into their own indices in an array
  let newArray = input.split(" ");
  let slicedArray = newArray.slice(1);
  //Isolate the first word
  let firstWord = newArray.slice(0, 1);
  let pushedValue = [];
  let newFirstWord = [];
  for (let index of firstWord) {
    for (let i = 0; i < index.length; i++) {
      newFirstWord.push(index[i].toLowerCase());
    }
  }

  //Convert the first letter of each following word into a capital
  for (let index of slicedArray) {
    for (let i = 0; i < index.length; i++) {
      if (i === 0) {
        pushedValue.push(index[i].toUpperCase());
      } else {
        pushedValue.push(index[i].toLowerCase());
      }
    }
  }
  //Add each following word to the first word
  let combined = newFirstWord.join("") + pushedValue.join("");

  //Return the combined words
  return combined;
};
module.exports = { camelCase };

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
