let divRoot = document.getElementById("root");

let hours = 0;
let minutes = 0;
let seconds = 0;

let displayHours = hours;
let displayMinutes = minutes;
let displaySeconds = seconds;

let text = document.getElementById("time-heading");
let t;
let status = false;

startTimer = (event) => {
  if (status == false) {
    t = setInterval(() => {
      status = true;
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
          if (hours >= 24) {
            hours = 0;
            minutes = 0;
            seconds = 0;
            text.innerHTML = "00:00:00 Timer Expired";
            window.alert("Timer Expired");
            clearInterval(t);
            status = false;
          }
        }
      }
      if (seconds < 10) {
        displaySeconds = 0 + seconds.toString();
      } else {
        displaySeconds = seconds;
      }
      if (minutes < 10) {
        displayMinutes = 0 + minutes.toString();
      } else {
        displayMinutes = minutes;
      }
      if (hours < 10) {
        displayHours = 0 + hours.toString();
      } else {
        displayHours = hours;
      }
      if (text.innerHTML !== "00:00:00 Timer Expired")
        text.innerHTML =
          displayHours + ":" + displayMinutes + ":" + displaySeconds;
    }, 1000);
  }
};

stopTimer = (event) => {
  clearInterval(t);
  status = false;
};

resetTimer = (event) => {
  clearInterval(t);
  status = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  text.innerHTML = hours + ":" + minutes + ":" + seconds;
};
