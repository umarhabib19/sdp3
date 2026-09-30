var seconds = 0;
var timer;
var running = false;
var lapNumber = 0;

function updateClock() {
  var now = new Date();
  document.getElementById("clock").innerHTML = now.toLocaleTimeString();
  document.getElementById("date").innerHTML = now.toDateString();
}

function showTime(time) {
  var hours = Math.floor(time / 3600);
  var minutes = Math.floor((time % 3600) / 60);
  var secs = time % 60;

  return twoDigits(hours) + ":" + twoDigits(minutes) + ":" + twoDigits(secs);
}

function twoDigits(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

function startStopwatch() {
  if (running) {
    clearInterval(timer);
    document.getElementById("startButton").innerHTML = "Start";
    document.getElementById("lapButton").disabled = true;
  } else {
    timer = setInterval(function () {
      seconds++;
      document.getElementById("stopwatch").innerHTML = showTime(seconds);
    }, 1000);
    document.getElementById("startButton").innerHTML = "Pause";
    document.getElementById("lapButton").disabled = false;
  }
  running = !running;
}

function addLap() {
  lapNumber++;
  var lap = document.createElement("li");
  lap.innerHTML = "Lap " + lapNumber + ": " + showTime(seconds);
  document.getElementById("laps").appendChild(lap);
}

function resetStopwatch() {
  clearInterval(timer);
  seconds = 0;
  lapNumber = 0;
  running = false;
  document.getElementById("stopwatch").innerHTML = "00:00:00";
  document.getElementById("startButton").innerHTML = "Start";
  document.getElementById("lapButton").disabled = true;
  document.getElementById("laps").innerHTML = "";
}

updateClock();
setInterval(updateClock, 1000);
