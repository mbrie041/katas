const calculateChange = function (total, cash) {
  const currencyArray = [
    "twentyDollars",
    2000,
    "tenDollars",
    1000,
    "fiveDollars",
    500,
    "twoDollars",
    200,
    "oneDollars",
    100,
    "quarter",
    25,
    "dime",
    10,
    "nickel",
    5,
    "penny",
    1,
  ];
  let returnedObject = {};

  let delta = cash - total;
  let n = 0;

  const valueCheck = function (delta, n) {
    if (delta / currencyArray[n + 1] > 0) {
      if (delta / currencyArray[n + 1] > 1) {
        returnedObject[currencyArray[n]] = Math.floor(
          delta / currencyArray[n + 1]
        );
      }
      delta = delta % currencyArray[n + 1];
      n = n + 2;
      valueCheck(delta, n);
    } else {
      return;
    }
  };
  valueCheck(delta, n);
  return returnedObject;
};

calculateChange(1787, 2000);
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// expected output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

// Change Calculator
// We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

// Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

// Valid denominations are as follows:

// Twenty dollars
// Ten dollars
// Five dollars
// Two dollars
// One dollar
// Quarter (25¢)
// Dime (10¢)
// Nickel (5¢)
// Penny (1¢)

// Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.
