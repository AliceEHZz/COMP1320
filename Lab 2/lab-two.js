//Object to store month code
const monthCode = {
  January: 1,
  February: 4,
  March: 4,
  April: 0,
  May: 2,
  June: 5,
  July: 0,
  August: 3,
  September: 6,
  October: 1,
  November: 4,
  December: 6,
};

// 'getMonthCode' fucntion to pull the correct month code for 'getDayOfTheWeek' function**/
const getMonthCode = (year, month) => {
  // Step 1: get month code from object 'monthCode'
  let getMonthCode = monthCode[month];

  // Step 2: check leap year
  if (
    (isLeapYear(year) === true) &
    (month === "January" || month === "February")
  ) {
    getMonthCode--;
  }

  // Step 3: check century
  if ((year >= 1600 && year < 1700) || (year >= 2000 && year < 2100)) {
    getMonthCode += 6;
  } else if ((year >= 1700 && year < 1800) || (year >= 2100 && year < 2200)) {
    getMonthCode += 4;
  } else if (year >= 1800 && year < 1900) {
    getMonthCode += 2;
  }

  return getMonthCode;
};

// 'leap year' function to check whether the user input is leap year
const isLeapYear = (year) => {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
    return true;
  }
  return false;
};

/******************Get day of the week function******************/
const getDayOfTheWeek = (year, month, day) => {
  month = month[0].toLocaleUpperCase() + month.substring(1);
  //Step 1:get last 2 digits from a year
  const twoDigitYear = year % 100;
  //Step 2: mod 12 on last two digits of the year
  const mod12 = twoDigitYear % 12;
  //Step 3: number of 12s in the last two digits
  const numberOf12 = (twoDigitYear - mod12) / 12;
  //step 4: number of 4s in remainder
  const fourInRemainder = Math.floor(mod12 / 4);

  //Step 5: sum all the numbers and mod by 7
  const result =
    (mod12 + numberOf12 + fourInRemainder + day + getMonthCode(year, month)) %
    7;

  //Step 6: print result (day of the week)
  const dayOfWeeK = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  return dayOfWeeK[result];
};

/******************Make calendar for 2022******************/
const months = Object.keys(monthCode);
const monthWith30Days = [4, 6, 9, 11];
const monthWith31Days = [1, 3, 5, 6, 7, 8, 10, 12];

const makeCalendar = (year) => {
  //step 1: loop month
  for (let monthInNum = 1; monthInNum <= 12; monthInNum++) {
    //step 2: loop day
    const daysInMonth = monthWith30Days.includes(monthInNum)
      ? 30
      : monthWith31Days.includes(monthInNum)
      ? 31
      : isLeapYear(year)
      ? 29
      : 28;

    const monthInString = months[monthInNum - 1];

    for (let day = 1; day <= daysInMonth; day++) {
      console.log(
        `${monthInNum}-${day}-${year} is a ${getDayOfTheWeek(
          year,
          monthInString,
          day
        )}`
      );
    }
  }
};

// Export functions to main.js file
module.exports = { getDayOfTheWeek, makeCalendar };
