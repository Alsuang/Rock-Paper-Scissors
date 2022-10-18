
//Make function called getComputerChoice that will 
//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors

function getComputerChoice() {

const randomNumber= Math.random()
    if (randomNumber <= .33) {
        return "rock"
    } else if (randomNumber >= .66) {
        return "scissors";
    } else {
        return "paper";
    }
}


//Play a single round of rock paper scissors. Need to make playerSelection and computer selection
//Paper v Paper, Paper v Rock, Paper v Scissors...rock v paper

function playRound(playerSelection, computerSelection) {
if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++ 
    return "You lose. Scissors beats paper"
    
    
  } else if (playerSelection === "paper" && computerSelection === "rock"){
    playerScore++
    return "You win! Paper beats rock"
    

  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    return "You win!. Rock beats scissors"

  
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++
    return "You lose. Paper beats rock"
  
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
   compScore++
    return "You lose. Rock beats scissors"
  
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    return "You win. Scissors beats paper"
  } else {
    return "You tied bitches!"
  } 


}

let playerScore = 0;
let compScore = 0;

// i initialized but it doesn't need to be part of code block

for(let i=0;i<5;i++){
    let playerSelection = prompt("Pick a move");
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + compScore);
  }




