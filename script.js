let computerScore = 0;
let userScore = 0;
let playerScore = document.getElementById("userscore");
let compScore = document.getElementById("computerscore");
let message = document.getElementById("message");
let compChoice = document.getElementById("comp");
const buttons = document.querySelectorAll("button");
let playerDisplay = document.getElementById("player");
let compDisplay = document.getElementById("computer");
let modal = document.getElementById("myModal");
let modalContent = document.getElementById("modal-content");

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    compDisplay.setAttribute("class", "rock");
    return "rock";
  } else if (computerChoice === 1) {
    compDisplay.setAttribute("class", "paper");
    return "paper";
  } else if (computerChoice === 2) {
    compDisplay.setAttribute("class", "scissors");
    return "scissors";
  }
}

function playRound(user, computer) {
  if (user === "rock") {
    playerDisplay.setAttribute("class", "rock");
    if (computer === "rock") {
      compChoice.textContent = `Computer chose: ${computer}`;
      message.textContent = "It is a tie, both chose rock!";
    } else if (computer === "scissors") {
      compChoice.textContent = `Computer chose: ${computer}`;
      message.textContent = "You win! Rock beats scissors";
      userScore++;
    } else if (computer === "paper") {
      compChoice.textContent = `Computer chose: ${computer}`;
      message.textContent = "You lose! Paper beats rock!";
      computerScore++;
    }
  } else if (user === "paper") {
    playerDisplay.setAttribute("class", "paper");
    if (computer === "rock") {
      compChoice.textContent = `Computer chose: ${computer}`;
      message.textContent = "You win! Paper beats rock!";
      userScore++;
    } else if (computer === "scissors") {
      compChoice.textContent = `Computer chose: ${computer}`;
      message.textContent = "You lose! Scissors beats paper";
      computerScore++;
    } else if (computer === "paper") {
      compChoice.textContent = `Computer chose: ${computer}`;
      message.textContent = "Tie game! you both chose paper!";
    }
  } else if (user === "scissors") {
    playerDisplay.setAttribute("class", "scissors");
    if (computer === "rock") {
      compChoice.textContent = `Computer chose: ${computer}`;
      message.textContent = "You lose! Rock beats scissors!";
      computerScore++;
    } else if (computer === "scissors") {
      compChoice.textContent = `Computer chose: ${computer}`;
      message.textContent = "Tie game! you both chose scissors!";
    } else if (computer === "paper") {
      compChoice.textContent = `Computer chose: ${computer}`;
      message.textContent = "You win! Scissors beats paper!";
      userScore++;
    }
  } else if (user === "restart") {
    message.textContent = "Make your choice";
    compChoice.textContent = "Welcome!";
    userScore = 0;
    computerScore = 0;
  }
}
function scoreBoard() {
  playerScore.innerHTML = `Player: ${userScore}`;
  compScore.innerHTML = `Computer: ${computerScore}`;
}

function gameEnd() {
  if (computerScore === 5) {
    modal.style.display = "block";
    modalContent.textContent = `Computer beat you! ${computerScore}:${userScore}`;
  } else if (userScore === 5) {
    modal.style.display = "block";
    modalContent.textContent = `You beat the computer! ${userScore}:${computerScore}`;
  }
}

function game(e) {
  if (computerScore < 5 && userScore < 5) {
    let playerSelection = e.target.innerText.toLowerCase();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    scoreBoard();
  }
  gameEnd();
}

buttons.forEach((button) => {
  button.addEventListener("click", game);
});
