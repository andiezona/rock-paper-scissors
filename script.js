function game() {
  const choices = ["rock", "paper", "scissors"];
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;

  function computerPlay(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function playRound(playerSelection, computerSelection) {
    round++;
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerScore++;
      return `YOU WIN!`;
    } else if (playerSelection === computerSelection) {
      return `DRAW!`;
    } else {
      computerScore++;
      return `THE COMPUTER WINS!`;
    }
  }

  function updateUI(result, message) {
    document.querySelector(".round-result").textContent = result;
    document.querySelector(".player-score").textContent = playerScore;
    document.querySelector(".computer-score").textContent = computerScore;
    document.querySelector(".round-number").textContent = round;
    document.querySelector(".game-message").textContent = message;
  }

  function checkForWinner() {
    let gameMessage;
    if (playerScore === 5) {
      gameMessage = "You win the game! Woo Hoo!";
      setBtnDisabled(true);
    } else if (computerScore === 5) {
      gameMessage = "The computer wins the game! Womp womp.";
      setBtnDisabled(true);
    } else {
      gameMessage = "The first player to get 5 points wins the game!";
    }
    return gameMessage;
  }

  function setBtnDisabled(status) {
    const btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => {
      btn.disabled = status;
    });
  }

  function playerSelectionHandler(event) {
    let playerChoice = event.target.id;
    let computerChoice = computerPlay(choices);
    let result = playRound(playerChoice, computerChoice);
    let gameMessage = checkForWinner();
    updateUI(result, gameMessage);
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    let gameMessage = checkForWinner();
    updateUI("", gameMessage);
    setBtnDisabled(false);
  }

  //=====

  const newGameBtn = document.querySelector(".new-game-btn");
  newGameBtn.addEventListener("click", resetGame);

  const btn = document.querySelectorAll(".btn");
  btn.forEach((btn) => {
    btn.addEventListener("click", playerSelectionHandler);
  });
}

game();
