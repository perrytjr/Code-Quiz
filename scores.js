
/*function UserScores() {

    let userScores = JSON.parse(window.localStorage.getItem('user-scores')) || [];

    userScores.sort(function(a, b) {
        return b.score - a.score;
    });

    userScores.forEach(function(score) {

        var listElement = document.createElement('li');
        listElement.textContent = score.userInit + ' - ' + score.score;

        let orderedLineElement = document.getElementById('user-scores');
        orderedLineElement.appendChild(listElement);

    });
}

function clearScores() {

    window.localStorage.removeItem('user-scores');
    window.location.reload();
}

document.getElementById('clearbutton').onclick = clearScores;

UserScores();*/





function printHighscores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // sort highscores by score property in descending order
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      // create li tag for each high score
      var liTag = document.createElement("li");
      liTag.textContent = score.userInit + " - " + score.score;
  
      // display on page
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  document.getElementById("clearbutton").onclick = clearHighscores;
  
  // run function when page loads
  printHighscores();