function game() {
  const choices = ["rock", "paper", "scissors"];
  let playerScore = 0;
  let computerScore = 0;

  function computerPlay(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function playRound(playerSelection, computerSelection, roundNumber) {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerScore++;
      return `You win round ${roundNumber}!`;
    } else if (playerSelection === computerSelection) {
      return `Round ${roundNumber} was a draw!`;
    } else {
      computerScore++;
      return `The computer wins round ${roundNumber}!`;
    }
  }
  //=====
  for (i = 0; i < 5; i++) {
    let playerChoice = prompt("Rock, paper, or scissors?", "").toLowerCase();
    let computerChoice = computerPlay(choices);
    let round = i + 1;
    let result = playRound(playerChoice, computerChoice, round);
    console.log(result);
  }

  if (playerScore > computerScore) {
    return "You win the game! Woo Hoo!";
  } else if (playerScore < computerScore) {
    return "The computer wins the game! Womp Womp.";
  } else if (playerScore === computerScore) {
    return "It was a draw! No one wins. Play again!";
  }
}
