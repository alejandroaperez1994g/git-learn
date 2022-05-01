const getWeeksDays = (parentElement, locale) => {
  const weekDays = [...Array(7).keys()];
  const intlWeekDays = new Intl.DateTimeFormat(locale, { weekday: "long" });

  const weekDaysNames = weekDays.map((weekDay) => {
    const weekDayElement = document.createElement("h6");
    const date = new Date(2021, 10, weekDay + 1);
    const weekDayName = intlWeekDays.format(date);

    weekDayElement.textContent =
      weekDayName.charAt(0).toUpperCase() + weekDayName.slice(1);
    weekDayElement.classList.add("weekDay");
    parentElement.appendChild(weekDayElement);
  });
};

const getCurrentDate = (locale) => {
  const intl = new Intl.DateTimeFormat(locale, {
    month: "long",
  });
  const months = document.querySelectorAll("[name]");
  const currentMonth = intl.format(new Date());
  const currentDay = new Date().getDate();
  let currentMonthElements;

  Array.from(months).forEach((month, index) => {
    if (month.getAttribute("name") === currentMonth) {
      months[index].classList.remove("hidden");
      months[index].setAttribute("currentMonth", "current");
      currentMonthElements = months[index];
    }
  });
  const dayElements = currentMonthElements.querySelectorAll("[value]");
  Array.from(dayElements).forEach((day) => {
    if (day.textContent === currentDay.toString()) {
      day.classList.add("currentDay");
    }
  });
};

const getFirstDayOfMonth = (year, numberOfMonths) => {
  const months = document.querySelectorAll("[name]");
  numberOfMonths.forEach((number) => {
    const startOn = new Date(year, number, 0).getDay();
    let current = months[number + 1].querySelectorAll("[value]");
    current.forEach((day) => {
      if (day.textContent === "1") {
        day.parentNode.parentNode.setAttribute(
          "style",
          `grid-column-start: ${startOn + 1}`
        );
      }
    });
  });
};

const setDays2 = (parentElement, numbersOfDays, numberOfMonth, year) => {
  const startOn = new Date(year, numberOfMonth, 0).getDay();

  const cellDayTemplate = document.getElementById("cellDay").content;
  let cellNumber = cellDayTemplate.getElementById("cell__number");
  const fragment = document.createDocumentFragment();

  [...Array(numbersOfDays).keys()].map((day, index) => {
    cellNumber.textContent = day + 1;
    cellNumber.setAttribute("value", day + 1);
    const clone = cellDayTemplate.cloneNode(true);
    fragment.appendChild(clone);
  });
  parentElement.appendChild(fragment);
};

export { getWeeksDays, getCurrentDate, getFirstDayOfMonth, setDays2 };