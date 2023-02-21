//Variables
let player = `Human`;
let comp = `Robo`;
let choices = ["rock", "paper", "scissors"];
let playerWins = 0;
let compWins = 0;
let tie = "";

//Selectors
let updateText = document.querySelector(".text-area");
let buttons = document.querySelectorAll(".choice");
let updateScore = document.querySelector(".score");
let btn = document.querySelector(".restart");

function clickListener() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
      let playerSelection = this.value;
      playRound(playerSelection, getComputerChoice());
      displayScore();
    });
  }
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerWins++;
    return (updateText.innerHTML = `Rock beats scissors. You win`);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compWins++;
    return (updateText.innerHTML = "Paper beats rock. You lose");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerWins++;
    return (updateText.innerHTML = "Paper beats rock. You win");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compWins++;
    return (updateText.innerHTML = "Scissors beats paper. You lose");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerWins++;
    return (updateText.innerHTML = "Scissors beats paper. You win");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compWins++;
    return (updateText.innerHTML = "Rock beats scissors. You lose");
  } else {
    tie = `Tie. Both players chose ${playerSelection}.`;
    return (updateText.innerHTML = tie);
  }
}


function displayScore() {
  updateScore.innerHTML = `Robo: ${compWins} Human:${playerWins}`;
  if (gameOver()) {
    if (playerWins === 5) {
      reset();
      updateText.innerHTML = "Player wins";
      btn.style.display = "block";
    }
    if (compWins === 5) {
      reset();
      updateText.innerHTML = "Robo Wins";
      btn.style.display = "block";
    }
  }
}

function gameOver() {
  return playerWins === 5 || compWins === 5;
}

function reset() {
  playerWins = 0;
  compWins = 0;
}

function disappear() {
  btn.style.display = "none";
  updateText.innerText = "Choose Your Option!";
  updateScore.innerHTML = "";
}
btn.addEventListener("click", disappear);
clickListener();
