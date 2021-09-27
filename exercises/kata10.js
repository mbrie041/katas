// Multiplication Table
// We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.

const multiplicationTable = function (maxValue) {
  const newArray = new Array(maxValue);
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = [];
    for (let j = 1; j <= maxValue; j++) {
      newArray[i].push(j * (i + 1));
    }
  }
  return stringConverter(newArray);
};

const stringConverter = function (array) {
  const output = array.map((row) => `${row.join(" ")}\n`);
  return output.join("");
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

module.exports = {
  multiplicationTable,
};
