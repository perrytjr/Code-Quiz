//variables
var startEl = document.getElementById("startbutton");
var timeEl = document.querySelector("time");
var secondsLeft = 75;
var clearEl = document.querySelector("#clearbutton");




//startbutton.addEventListener("click", setTime);


function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}
setTime();












//clear button for highscores page still have to set up score form and connect button to clear scores
clearEl.addEventListener("click", function (event) {
  event.preventDefault();
  textAreaEl.value = "";
  elements.forEach(function (element) {
    element.textContent = "";
  });
});