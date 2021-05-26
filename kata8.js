const repeatNumbers = function (data) {
  //we'll need an output array
  const outputArray = [];
  const outputString = [];

  //iterate through each array of number pairs, for each pair we'll need to push an array inside of our output array
  for (let i = 0; i < data.length; i++) {
    outputArray.push([]);
    //inside each array of number pairs, iterate n times where n is the second number of the pair
    for (let j = 0; j < data[i][1]; j++) {
      //during each iteration, push the number into the nested array matching the iteration
      outputArray[i].push(data[i][0]);
    }
    outputString.push(outputArray[i].join(''))
  }
  return outputString.join(', ')
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);

//expected output
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292
