// Multiplication Table
// We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.

const multiplicationTable = function (maxValue) {
  let newArray = new Array(maxValue);
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = [];
    for (let j = 1; j <= maxValue; j++) {
      newArray[i].push(j * (i + 1));
    }
  }
  const stringConverter = function (array) {
    let output = "";
    for (let element of array) {
      output += `${element.join(" ")}\n`;
    }
    return output;
  };
  console.log(stringConverter(newArray));
  return stringConverter(newArray);
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
module.exports = {
  multiplicationTable,
};
