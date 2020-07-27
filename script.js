//variables
var startEl = document.getElementById("#startbutton");
var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var clearEl = document.querySelector("#clearbutton");




startbutton.addEventListener("click", setTime);



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



// questions from the GIF that was sent to us and their answers 

/*Commonly used data types do not include:
  a. string
  b. boolean
  c. alerts
  d. number
  answer is c

  The condition in an if else statement is enclosed within_____.
  a. quotes
  b. curly brackets
  c. parenthesis
  d. square brackets
  answer is c

   Arrays in javascript can be used to store ____.
   a. numbers and strings
   b. other arrays
   c. booleans
   d. all of above 
   answer is d 

   String values must be enclosed within ____ when being assigned to variables.
   a. commas
   b. curly brakets
   c. quotes
   d. parenthesis
   answer is c

  A very useful tool used during development and debugging for printing content to the debugger is:
  a. javascript
  b. terminal/bash
  c. for loops
  d. console.log 
  answer is d */



//clear button for highscores page still have to set up score form and connect button to clear scores
clearEl.addEventListener("click", function (event) {
  event.preventDefault();
  textAreaEl.value = "";
  elements.forEach(function (element) {
    element.textContent = "";
  });
});