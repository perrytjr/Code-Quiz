//variables
var startEl = document.getElementById("startbutton");
var timeEl = document.getElementById("time");
var secondsLeft = (questions.length * 15 + 1)
var clearEl = document.querySelector("#clearbutton");
var userChoices = document.getElementById("answers");
var questionTitle = document.getElementById("questions");
var submit
var answer;
var numberofQuestions = -1;
var userscoreEl = document.getElementById("user-score");
//startbutton.addEventListener("click", setTime); used to control time clock
startbutton.addEventListener("click", startTime);

//this will hopefully make welcome section dissapear and quiz section take over
function startTime() {
  document.getElementById("welcome").classList.add('d-none');
  document.getElementById("quiz").classList.remove('d-none');

  setTime();
  poolQuestions();
}


function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || numberofQuestions === questions.length) {
      clearInterval(timerInterval);
      setTimeout(userScore = 500)
    }

  }, 1000);

}

function poolQuestions() {
  numberofQuestions++;

  var answer = questions[numberofQuestions].answers;

  questionTitle.textContent = questions[numberofQuestions].title;
  userChoices.innerHTML = "";

  var choices = questions[numberofQuestions].choices;

  for (var i = 0; i < choices.length; i++) {
    var newChoice = document.createElement("button");

    newChoice.textContent = choices[i]
    answerBtn = userChoices.appendChild(newChoice).setAttribute("class", "m-1 btn-purple  btn-block float-left");
  }
}


function magicFeedback() {
  var feedback = document.getElementsByClassName("correct-wrong")[0]
  feedback.style.display = 'none'
}
function showFeedback() {
  var feedback = document.getElementsByClassName("correct-wrong")[0]
  feedback.removeAttribute('style');
}

userChoices.addEventListener("click", function (event) {
  var feedback = document.getElementsByClassName("correct-wrong")[0]

  if (answer === event.target.textContent) {
    feedback.innerHTML = "Correct";
    showFeedback();

  } else {
    feedback.innerHTML = "Wrong";
    secondsLeft = secondsLeft - 10;
    showFeedback();
    
  }
  poolQuestions();
});

function Score() {
  document.getElementById("quiz").classList.add('d-none');
  document.getElementById("score").classList.remove('d-none');
  userscoreEl.textContent = "Your score is " + secondsLeft + ("")
}
