//variables
var startEl = document.getElementById("startbutton");
var timeEl = document.getElementById("time");
var secondsLeft = questions.length * 15;
var clearEl = document.querySelector("#clearbutton");
var userChoices = document.getElementById("answers");
var questionTitle = document.getElementById("questions");
var submitBtn = document.querySelector("button.submitBtn");
var answer;
var numberofQuestions = -1;
var userscoreEl = document.getElementById("user-score");
var userInitEl = document.getElementById('userName');
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
    answerBtn = userChoices.appendChild(newChoice).setAttribute("class", "btn-purple btn-md float-left");
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


function saveScores() {

  let userInit = userInitEl.value.trim();

  if (userInit !== '') {

    let userScores = JSON.parse(window.localStorage.getItem('user-scores')) || [];

    let nextScore = {
      score: time,
      userInit: userInit
    }

    userScores.push(nextScore);
    window.localStorage.setItem('user-scores', JSON.stringify(userScores));

    window.location.href = "scores.html";
  }
}

function checkInput(event) {

  if (event.key === 'Enter') {
    saveScores();
  }
}
clearbutton.addEventListener("click", function () {
  localStorage.clear();
});