const talkingCalendar = function (date) {
  const newArray = date.split("/");
  const endings = ["st", "nd", "rd", "th"];
  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
 
  let returnedYear = newArray[0];
  let returnedNumber = "";
  let returnedMonth = "";

  const nanStatement = "Please input a valid date";
  //check to see if the given day is a number and under 32
  if (Number(newArray[2]) == newArray[2] && Number(newArray[2]) < 32) {
    let dayAsNumber = Number(newArray[2])
    //check to see which ending needs to be applied
    if (dayAsNumber === 1 || dayAsNumber === 21 || dayAsNumber === 31) {
      returnedNumber = newArray[2] + endings[0];
    } else if (dayAsNumber === 2 || dayAsNumber === 22) {
      returnedNumber = dayAsNumber + endings[1];
    } else if (dayAsNumber === 3 || dayAsNumber === 23) {
      returnedNumber = dayAsNumber + endings[2];
    } else {
      returnedNumber = dayAsNumber + endings[3];
    }
  } else {
    //if it's not a date ask for a valid one
    return nanStatement;
  }

  //check to see if the given month is a number and under 13
  if (Number(newArray[1]) == newArray[1] && Number(newArray[1]) < 13) {
    //iterate for each month
    for (let m = 1; m < 13; m++) {
      //if itterator = month 
      if (m === Number(newArray[1])) {

        returnedMonth = monthsArray[m-1]
      }
    }
  } else {
    //if it's not a date ask for a valid one
    return nanStatement;
  }

  //check to see if the given year is a number
 if (Number(returnedYear) == returnedYear) {
  const returnedString = `${returnedMonth} ${returnedNumber}, ${returnedYear}`
  return returnedString
 } else {
  return nanStatement;
 }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// expected output
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
