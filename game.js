const score = { win: 0, lose: 0, tie: 0 };

function computerPlay() {
  const getRandomInt = (max) => Math.floor(Math.random() * max);

  const option = getRandomInt(3);

  if (option === 0) {
    return "rock";
  }
  if (option === 1) {
    return "paper";
  }
  if (option === 2) {
    return "scissors";
  }
}

function result(user, opponent) {
  switch (user) {
    case "rock":
      if (opponent === "scissors") {
        return "win";
      } else if (opponent === "paper") {
        return "lose";
      }
      return "tie";
    case "scissors":
      if (opponent === "paper") {
        return "win";
      } else if (opponent === "rock") {
        return "lose";
      }
      return "tie";
    case "paper":
      if (opponent === "rock") {
        return "win";
      } else if (opponent === "scissors") {
        return "lose";
      }
      return "tie";
  }
}

function playRound(event, computerSelection = computerPlay()) {
  const player = this.textContent.toLowerCase();
  const computer = computerSelection;
  updateScore(result(player, computer));
  displayScore();
  if (isGameOver()) {
    displayWinner();
    endGame();
    askToPlayAgain();
  }
}

function endGame() {
  const buttons = document.querySelectorAll("div.button");
  buttons.forEach((button) => {
    button.removeEventListener("click", playRound);
  });
}

function isGameOver() {
  return score.lose === 5 || score.win === 5;
}

function displayWinner() {
  const body = document.querySelector("body");
  const result = document.createElement("div");
  result.classList.add("result");
  result.textContent = score.lose === 5 ? "Uh oh! You lost!" : "Yay! You won!";

  body.appendChild(result);
}

function askToPlayAgain() {
  const body = document.querySelector("body");
  const playAgainButton = document.createElement("div");
  playAgainButton.classList.add("play-button");
  playAgainButton.textContent = "Play Again";
  playAgainButton.addEventListener("click", replay);

  body.appendChild(playAgainButton);
}

function updateScore(result) {
  score[result] += 1;
}

function replay() {
  resetScore();
  resetGameUI();
}

function resetScore() {
  score.lose = 0;
  score.win = 0;
  score.tie = 0;
}

function resetGameUI() {
  const body = document.querySelector("body");
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
  game();
}

function displayScore() {
  const scoreWins = document.querySelector("div.score.wins");
  const scoreLosses = document.querySelector("div.score.losses");
  const scoreTies = document.querySelector("div.score.ties");

  scoreWins.textContent = score.win === 0 ? "" : `You win: ${score.win}`;
  scoreLosses.textContent =
    score.lose === 0 ? "" : `Computer wins: ${score.lose}`;
  scoreTies.textContent = score.tie === 0 ? "" : `Tie: ${score.tie}`;
}

function initButtons() {
  const body = document.querySelector("body");
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("buttons");
  const rockBtn = document.createElement("div");
  rockBtn.textContent = "Rock";
  rockBtn.classList.add("rock", "button");
  const scissorBtn = document.createElement("div");
  scissorBtn.textContent = "Scissors";
  scissorBtn.classList.add("scissors", "button");
  const paperBtn = document.createElement("div");
  paperBtn.textContent = "Paper";
  paperBtn.classList.add("paper", "button");

  const buttons = [rockBtn, paperBtn, scissorBtn];
  buttons.forEach((button) => {
    button.addEventListener("click", playRound);
    btnContainer.appendChild(button);
  });

  body.appendChild(btnContainer);
}

function initScoreDisplay() {
  const body = document.querySelector("body");
  const scoreBoard = document.createElement("div");
  scoreBoard.classList.add("scoreboard");
  const scoreWins = document.createElement("div");
  scoreWins.classList.add("score", "wins");
  const scoreLosses = document.createElement("div");
  scoreLosses.classList.add("score", "losses");
  const scoreTies = document.createElement("div");
  scoreTies.classList.add("score", "ties");
  scoreBoard.appendChild(scoreWins);
  scoreBoard.appendChild(scoreLosses);
  scoreBoard.appendChild(scoreTies);
  body.appendChild(scoreBoard);
}

function paintTitle() {
  const title = document.createElement("h1");
  const body = document.querySelector("body");
  title.textContent = "ROCK PAPER SCISSORS";
  body.appendChild(title);
}
function game() {
  paintTitle();
  initButtons();
  initScoreDisplay();
}

game();
