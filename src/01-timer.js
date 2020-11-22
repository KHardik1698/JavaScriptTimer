let divRoot = document.getElementById("root");

const p = document.createElement("p");
p.classList.add("timer-para");
p.innerHTML = "00:00:00";
divRoot.appendChild(p);

const startButton = document.createElement("button");
startButton.classList.add("timer-button");
startButton.innerHTML = "Start";
divRoot.appendChild(startButton);

const pauseButton = document.createElement("button");
pauseButton.classList.add("timer-button");
pauseButton.innerHTML = "Pause";
divRoot.appendChild(pauseButton);

const resetButton = document.createElement("button");
resetButton.classList.add("timer-button");
resetButton.innerHTML = "Reset";
divRoot.appendChild(resetButton);
