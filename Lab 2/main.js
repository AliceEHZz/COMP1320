const getDayOfTheWeek = require("./lab-two").getDayOfTheWeek;
const makeCalendar = require("./lab-two").makeCalendar;
const readlineSync = require("readline-sync");

/**********************Get day of the Week******************/
const year = readlineSync.questionInt("What is the year: ");
const month = readlineSync.question("What is the month: ");
const day = readlineSync.questionInt("What is the day: ");

/***************Get Day Of The Week For User Date************/
const getDayOfTheWeekForUserDate = (year, month, day) => {
  console.log(`You entered: ${year} ${month} ${day}`);
};

getDayOfTheWeekForUserDate(year, month, day);

console.log(getDayOfTheWeek(year, month, day));

/**********************Make Calendar***********************/
const answer = readlineSync.question(
  "Do you want to print calendar for 2022? (Y or N)"
);

const printCalendar = (answer) => {
  if (answer === "Y") {
    makeCalendar(2022);
  }
};
printCalendar(answer);
