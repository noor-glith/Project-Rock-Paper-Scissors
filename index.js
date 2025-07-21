function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
      return "rock";
    } else if (randomNumber < 0.67) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function getHumanChoice() {
    const userInput = prompt("Enter your choice: rock, paper, or scissors");
    return userInput.toLowerCase();
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
  }

  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`\nRound ${i}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  // Final winner
  console.log("\nFinal Results:");
  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("😢 You lost the game!");
  } else {
    console.log("🤝 It's a tie overall!");
  }
}

// Start the game
playGame();
