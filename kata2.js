const conditionalSum = function (values, condition) {
  let outputValue = 0;
  //check to see if condition is even or odd
  if (condition === "even") {
    //iterate through the array of values and based on condition add the current iteration to a placeholder value
    values.forEach((element) => {
      if (element % 2 === 0) {
        outputValue += element;
      }
    });
    //check to see if condition is even or odd
  } 
  if (condition === "odd") {
    //iterate through the array of values and based on condition add the current iteration to a placeholder value
    values.forEach((element) => {
      if (element % 2 !== 0) {
        outputValue += element;
      }
    });
  }
  return outputValue
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

//expected output
// 6
// 9
// 144
// 0
