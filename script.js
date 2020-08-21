//variables
var startEl = document.getElementById("startbutton");
var timeEl = document.getElementById("time");
var secondsLeft = (questions.length * 15);
var clearEl = document.querySelector("#clearbutton");
var userChoices = document.getElementById("answers");
var questionTitle = document.getElementById("questions");
var questionSection = document.getElementById("quiz");
var submitBtn = document.querySelector("button.submitBtn");
var answer;
var numberofQuestions = 0;
var userscoreEl = document.getElementById("user-score");
var userInitEl = document.getElementById('userName');
var outputElement = document.getElementById("correct-wrong");

startbutton.addEventListener("click", startTime);

//this will hopefully make welcome section dissapear and quiz section take over
function startTime() {

  const beginQuiz = document.getElementById('welcome')
  beginQuiz.setAttribute('class', 'hide');
  questionSection.removeAttribute('class');
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


  let currentQuestion = questions[numberofQuestions];

  let questionMain = document.getElementById("questions");
  questionMain.textContent = currentQuestion.title;
  
  userChoices.innerHTML = '';

  currentQuestion.choices.forEach(function (choice, i) {

    let choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    choiceNode.onclick = answerClick;

    userChoices.appendChild(choiceNode);

  });
}

function answerClick() {

  if (this.value !== questions[numberofQuestions].answer) {

    secondsLeft -= 10;

    if (secondsLeft < 0) {
      secondsLeft = 0;
    }

    timeEl.textContent = time;

    outputElement.textContent = 'Incorrect!';
  } else {

    outputElement.textContent = 'Correct!';
  }

  outputElement.setAttribute('class', 'correct-wrong');
  setTimeout(function () {
    outputElement.setAttribute('classs', 'output hide');
  }, 1000);

  numberofQuestions++;

  if (numberofQuestions === questions.length) {
    quizUp();
  } else {
    poolQuestions();
  }
}

function quizUp() {

  let allDone = document.getElementById('score');
  allDone.removeAttribute('class');

  let userscoreEl = document.getElementById('user-score');
  userscoreEl.textContent = secondsLeft;

  questionSection.setAttribute('class', 'hide');

}

function saveScores() {

  let userInit = userInitEl.value.trim();

  if (userInit !== '') {

    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    var nextScore = {
      score: secondsLeft,
      userInit: userInit
    }

    highscores.push(nextScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
   
    window.location.href = "highscores.html";
  }
}

function checkInput(event) {

  if (event.key === 'Enter') {
    saveScores();
  }
}
submitBtn.onclick = saveScores;
userInitEl.onkeyup = checkInput;
