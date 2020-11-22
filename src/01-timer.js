let divRoot = document.getElementById("root");

var time = document.createElement("h1");
time.id = "time-heading";
divRoot.appendChild(time);

const startButton = document.createElement("div");
startButton.innerHTML =
  "<input type = 'button' value = 'Start' onClick = 'time()'>";
divRoot.appendChild(startButton);

const pauseButton = document.createElement("div");
pauseButton.innerHTML = "<input type = 'button' value = 'Pause' onClick = ''>";
divRoot.appendChild(pauseButton);

const resetButton = document.createElement("div");
resetButton.innerHTML = "<input type = 'button' value = 'Reset' onClick = ''>";
divRoot.appendChild(resetButton);

let hours = 0;
let minutes = 0;
let seconds = 2;

time.innerHTML = hours + ":" + minutes + ":" + seconds;

start = () => {
  time();
  document.getElementById("time-heading").innerHTML =
    hours + ":" + minutes + ":" + seconds;
  console.log(hours + ":" + minutes + ":" + seconds);
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
    if (minutes < 0) {
      minutes = 59;
      hours--;
      if (hours < 0) {
        hours = 0;
        minutes = 0;
        seconds = 0;
        document.getElementById("time-heading").innerHTML =
          "00:00:00 Timer Expired";
      }
    }
  }
};

time = () => (t = setTimeout(start, 1000));
