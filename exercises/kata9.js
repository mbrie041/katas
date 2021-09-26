const camelCase = function(input) {
  //Seperate each word into their own indices in an array
  let newArray = input.split(" ");
  console.log(newArray);
  //Isolate the first word
  //Convert the first letter of each following word into a capital
  //Add each following word to the first word
  //Return the combined words
  return newArray.toString();
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
