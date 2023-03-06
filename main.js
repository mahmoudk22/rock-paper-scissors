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
  const resultDiv = document.querySelector('#results');
  const rockButton = document.querySelector('#rock');
  const paperButton = document.querySelector('#paper');
  const scissorsButton = document.querySelector('#scissors');

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    resultDiv.textContent = '';
  }

  const playAgainButton = document.querySelector('#play-again');
playAgainButton.addEventListener('click', () => {
  resetGame();
});

  rockButton.addEventListener('click', () => {
    const roundResult = playRound('rock', getComputerChoice());
    resultDiv.textContent = roundResult;
    if (roundResult === "It's a tie!") {
      resultDiv.textContent += " It's a tie!";
    } else if (roundResult.startsWith('You win!')) {
      playerScore++;
      resultDiv.textContent += " You're winning!";
    } else {
      computerScore++;
      resultDiv.textContent += " You're losing!";
    }

    resultDiv.textContent += ` Score: ${playerScore} - ${computerScore}`;

    if (playerScore >= 5 || computerScore >= 5) {
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;

      if (playerScore > computerScore) {
        resultDiv.textContent += ` You won the game! Final score: ${playerScore} - ${computerScore}`;
      } else if (computerScore > playerScore) {
        resultDiv.textContent += ` The Computer Wins! Final score: ${playerScore} - ${computerScore}`;
      } else {
        resultDiv.textContent += ` The game ended in a tie! Final score: ${playerScore} - ${computerScore}`;
      }
    }
  });

  paperButton.addEventListener('click', () => {
    const roundResult = playRound('paper', getComputerChoice());
    resultDiv.textContent = roundResult;
    if (roundResult === "It's a tie!") {
      resultDiv.textContent += " It's a tie!";
    } else if (roundResult.startsWith('You win!')) {
      playerScore++;
      resultDiv.textContent += " You're winning!";
    } else {
      computerScore++;
      resultDiv.textContent += " You're losing!";
    }

    resultDiv.textContent += ` Score: ${playerScore} - ${computerScore}`;

    if (playerScore >= 5 || computerScore >= 5) {
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;

      if (playerScore > computerScore) {
        resultDiv.textContent += ` You won the game! Final score: ${playerScore} - ${computerScore}`;
      } else if (computerScore > playerScore) {
        resultDiv.textContent += ` The Computer Wins! Final score: ${playerScore} - ${computerScore}`;
      } else {
        resultDiv.textContent += ` The game ended in a tie! Final score: ${playerScore} - ${computerScore}`;
      }
    }
  });

scissorsButton.addEventListener('click', () => {
  const roundResult = playRound('scissors', getComputerChoice());
  resultDiv.textContent = roundResult;
  if (roundResult === "It's a tie!") {
    resultDiv.textContent += " It's a tie!";
  } else if (roundResult.startsWith('You win!')) {
    playerScore++;
    resultDiv.textContent += " You're winning!";
  } else {
    computerScore++;
    resultDiv.textContent += " They're Winning!";
  }

  resultDiv.textContent += ` Score: ${playerScore} - ${computerScore}`;

  if (playerScore >= 5 || computerScore >= 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    if (playerScore > computerScore) {
      resultDiv.textContent += ` You won the game! Final score: ${playerScore} - ${computerScore}`;
    } else if (computerScore > playerScore) {
      resultDiv.textContent += ` The Computer Wins! Final score: ${playerScore} - ${computerScore}`;
    } else {
      resultDiv.textContent += ` The game ended in a tie! Final score: ${playerScore} - ${computerScore}`;
    }
  }
});
}

game();
