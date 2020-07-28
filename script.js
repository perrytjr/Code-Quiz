//variables
var startEl = document.getElementById("startbutton");
var timeEl = document.getElementById("time");
var secondsLeft = (questions.length * 15 + 1)
var clearEl = document.querySelector("#clearbutton");
var userChoices = document.getElementById("answers");
var questionTitle = document.getElementById("questions");

var answer;
var numberofQuestions = -1;

//startbutton.addEventListener("click", setTime); used to control time clock
startbutton.addEventListener("click", startTime);

//this will hopefully make welcome section dissapear and quiz section take over
function startTime (){
  document.getElementById("welcome").classList.add('d-none');
  document.getElementById("quiz").classList.remove('d-none');

  setTime();
  
}


function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || numberofQuestions === questions.length) {
      clearInterval(timerInterval);
      setTimeout(userScore, 500);
    }

  }, 1000);
  poolQuestions();
}

function poolQuestions () {
numberofQuestions++; 

let answer = questions[numberofQuestions].answers

questionTitle.textContent = questions[numberofQuestions].title;
userChoices.innerHTML = "";

var choices = questions[numberofQuestions].choices;

for (var i = 0; i < choices.length; i++) {
  var newChoice = document.createElement("button");

  newChoice.textContent = choices[i]
  answerBtn = userChoices.appendChild(newChoice).setAttribute("class", "m-1 btn-purple  btn-block float-left");
}
}










//clear button for highscores page still have to set up score form and connect button to clear scores
