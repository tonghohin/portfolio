const countdownday = document.querySelector("#countdownday");
const countdownhour = document.querySelector("#countdownhour");
const countdownminute = document.querySelector("#countdownminute");
const countdownsecond = document.querySelector("#countdownsecond");
const countdowncontainer = document.querySelector("#countdowncontainer");
const graduatebutton = document.querySelector("#graduatebutton");

countdown();
setInterval(countdown, 1000);

graduatebutton.addEventListener("click", () => {
  countdowncontainer.style.opacity = "1";
});

function countdown() {
  const today = Date.now();
  const graduateDay = Date.parse("May 26,2023");
  const dateDifference = graduateDay - today;

  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const toDay = Math.floor(dateDifference / day);
  const toHour = Math.floor((dateDifference - toDay * day) / hour);
  const toMinute = Math.floor((dateDifference - toDay * day - toHour * hour) / minute);
  const toSecond = Math.floor((dateDifference - toDay * day - toHour * hour - toMinute * minute) / 1000);

  countdownday.textContent = toDay;
  countdownhour.textContent = toHour;
  countdownminute.textContent = toMinute;
  countdownsecond.textContent = toSecond;
}
