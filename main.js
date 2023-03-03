function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
    function game() {
        let playerScore = 0;
        let computerScore = 0;
    
        for (let i = 0; i < 5; i++) {
          let playerSelection = prompt("Choose Rock, Paper, or Scissors: ").toLowerCase();
          let computerSelection = getComputerChoice();
          let roundResult = playRound(playerSelection, computerSelection);
          console.log(roundResult);
      
          if (roundResult === "It's a Tie!") {
            console.log("It's a tie!");
          } else if (roundResult.startsWith('You win!')) {
            playerScore++;
            console.log("You're winning!");
          } else {
            computerScore++;
            console.log("You're losing!");
          }
        }
    
        if (playerScore > computerScore) {
          console.log(`You won the game! Final score: ${playerScore} - ${computerScore}`);
        } else if (computerScore > playerScore) {
          console.log(`You lost the game! Final score: ${playerScore} - ${computerScore}`);
        } else {
          console.log(`The game ended in a tie! Final score: ${playerScore} - ${computerScore}`);
        }
      }
  
 game();