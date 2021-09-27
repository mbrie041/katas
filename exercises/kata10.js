// Multiplication Table
// We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.

const multiplicationTable = function (maxValue) {
  let x = new Array(maxValue);
  //Generate multiplication values from 1 to the provided number using iteration
  //ex: if maxValue is 5, the values would be 1x1, 1x2, 1x3, 1x4, 1x5
  //On the next line, generate the next values from 1+i to the provided number using iteration
  //ex: if maxValue is 5, the values would now be 2x1, 2x2, 2x3, 2x4, 2x5
  //Output a square table
  return x;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
