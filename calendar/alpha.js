import {
  getWeeksDays,
  getCurrentDate,
  getFirstDayOfMonth,
  setDays2,
} from "./utils.js";
import { nextMonth, previousMonth } from "./calendarController.js";
const main = document.querySelector("main");

const year = 2022;
const locale = "us";
const numberOfMonths = [...Array(12).keys()];
const nextBtn = document.getElementById("next-arrow");
const previousBtn = document.getElementById("back-arrow");

const calendar = (year) => {
  let calendarMonth = [];
  numberOfMonths.map((numberOfMonth, index) => {
    const date = new Date(year);
    let intl = new Intl.DateTimeFormat(locale, {
      month: "long",
    });

    let nameOfMonths = intl.format(new Date(year, numberOfMonth));
    let numbersOfDays = new Date(year, numberOfMonth + 1, 0).getDate();
    let days = [];

    for (let i = 1; i <= numbersOfDays; i++) {
      days.push({
        number: i,
        events: [],
      });
    }
    calendarMonth.push({
      year: year,
      nameOfMonth: nameOfMonths,
      numbersOfDays: numbersOfDays,
      days: days,
    });
  });

  return calendarMonth;
};

class Event {
  constructor(
    title,
    description,
    initDate,
    existsEndDate,
    endDate,
    reminder,
    reminderTime,
    type,
    finnished
  ) {
    this.title = title;

    this.description = description;

    this.initDate = initDate;

    this.endDate = !existsEndDate ? null : endDate;

    this.reminder = reminder;

    this.reminderTime = reminderTime;

    this.type = type;

    this.finnished = false;
  }

  setFinnished(value) {
    this.finnished = value;
  }
}

const setDays = (parentElement, numbersOfDays, numberOfMonth) => {
  const startOn = new Date(year, numberOfMonth, 0).getDay();
  console.log(numberOfMonth + 1, startOn + 1);
  [...Array(numbersOfDays).keys()].map((day, index) => {
    let dayElement = document.createElement("p");

    if (
      index === 0
        ? dayElement.setAttribute("style", `grid-column-start: ${startOn + 1}`)
        : ""
    );

    dayElement.textContent = day + 1;
    dayElement.setAttribute("value", day + 1);
    parentElement.appendChild(dayElement);
  });
};

let newCalendar = calendar(2022);

const buildCalendar = (calendar) => {
  calendar.forEach((month, index) => {
    const body = document.getElementById("body");
    let monthElement = document.createElement("div");
    let monthName = document.createElement("h2");
    let daysContainer = document.createElement("div");

    daysContainer.classList.add("days__container");
    monthElement.classList.add("calendar");
    monthElement.classList.add("hidden");
    monthElement.setAttribute("name", month.nameOfMonth);
    monthName.textContent = month.nameOfMonth.toUpperCase();

    monthElement.appendChild(monthName);
    monthElement.appendChild(daysContainer);
    getWeeksDays(daysContainer, locale);
    setDays2(
      daysContainer,
      month.numbersOfDays,
      index,
      month.nameOfMonth,
      year
    );
    main.appendChild(monthElement);
  });
};

buildCalendar(newCalendar);
getCurrentDate(locale);
getFirstDayOfMonth(year, numberOfMonths);

nextBtn.addEventListener("click", () => {
  const currentMonth = document.querySelector('[currentmonth="current"]');
  nextMonth(currentMonth);
});
previousBtn.addEventListener("click", () => {
  const currentMonth = document.querySelector('[currentmonth="current"]');
  previousMonth(currentMonth);
});