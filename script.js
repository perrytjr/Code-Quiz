//variables
var startEl = document.getElementById("startbutton");
var timeEl = document.getElementById("time");
var secondsLeft = (questions.length * 15);
var clearEl = document.querySelector("#clearbutton");
var userChoices = document.getElementById("answers");
var questionTitle = document.getElementById("questions");
var submitBtn = document.querySelector("button.submitBtn");
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
      setTimeout(userScore = 1000)
    }

  }, 1000);

}

function poolQuestions() {
  numberofQuestions++;

  answer = questions[numberofQuestions]

  questionTitle.textContent = questions[numberofQuestions].title
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
    setTimeout(magicFeedback, 1000);
    showFeedback();

  } else {
    feedback.innerHTML = "Wrong";
    setTimeout(magicFeedback, 1000);
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

submitBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  addScore();
  window.location.href = 'highscores.html'
});

function addScore() {
  userNameInput = document.getElementById("userName").nodeValue
  var newScore = {
    name: userNameInput,
    score: secondsLeft
  };

  var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
  highScores.push(newScore)
  localStorage.setItem("highScores", JSON.stringify(highScores));

}

var clearBtn = document.querySelector("#clearbutton"),
  highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
  scoreList = document.getElementById("score-list");

highScores.sort(function (a, b) {
  return b.score - a.score
})

for (var s = 0; s < highScores.length; s++) {
  var newLI = document.createElement("li")
  newLI.textContent = highScores[s].name + " - " + highScores[s].score
  scoreList.appendChild(newLI);
}

clearBtn.addEventListener("click", function () {
  localStorage.clear();
  history.back()
});