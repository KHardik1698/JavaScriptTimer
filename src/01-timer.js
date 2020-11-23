let divRoot = document.getElementById("root");

let hours = 0;
let minutes = 0;
let seconds = 0;

let text = document.getElementById("time-heading");
text.innerHTML = hours + ":" + minutes + ":" + seconds;

startTimer = (event) => {
  let t = setInterval(() => {
    text.innerHTML = hours + ":" + minutes + ":" + seconds;
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
        }
      }
    }
  }, 1000);
};
