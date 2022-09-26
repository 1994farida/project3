//рандомный выбор коспьютера
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random()*choices.length);
    return choices[random];
}

//функции раундов
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock","Rock","ROCK") {
      if (computerSelection === "paper") {
        computerScore++;
        return lose;
      } else if (computerSelection === "rock") {
        return tie;
      } else {
        userScore++;
        return win;
      }
    }
  
    if (playerSelection.toLowerCase() === "scissors","Scissors","SCISSORS") {
      if (computerSelection === "paper") {
        userScore++;
        return win;
      } else if (computerSelection === "rock") {
        computerScore++;
        return lose;
      } else {
        return tie;
      }
    }
  
    if (playerSelection.toLowerCase() === "paper","Paper","PAPER") {
      if (computerSelection === "paper") {
        return tie;
      } else if (computerSelection === "rock") {
        userScore++;
        return win;
      } else {
        computerScore++;
        return lose;
      }
    }
  }
  
  //вывод информации о раунде
  let userScore = parseInt(0);
  let computerScore = parseInt(0);
  let win = "You win"
  let lose = "You lose"
  let tie = "It is a tie"
  
  //5 round game
  for(let i=0;i<5;i++){
    let playerSelection = prompt("Rock, Paper or Scissors?");
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + userScore);
    console.log("Computer score = " + computerScore);
  }
