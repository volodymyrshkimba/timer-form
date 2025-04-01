const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = (value) => {
  return String(value).padStart(2, "0");
};

const intID = setInterval(() => {
  const targetDate = new Date("2025-05-01T00:00:00Z").getTime();
  const timeToEnd = targetDate - Date.now();

  const timeObj = convertMs(timeToEnd);
  daysEl.textContent = addLeadingZero(timeObj.days);
  hoursEl.textContent = addLeadingZero(timeObj.hours);
  minutesEl.textContent = addLeadingZero(timeObj.minutes);
  secondsEl.textContent = addLeadingZero(timeObj.seconds);
  if (timeToEnd < 1000) {
    clearInterval(intID);
  }
}, 1000);
