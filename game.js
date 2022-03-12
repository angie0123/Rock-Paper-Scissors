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
  const updatedScore = updateScore(result(player, computer));
  displayScore();
}

function updateScore(result) {
  score[result] += 1;
  console.log(score);
}

function displayScore() {
  const scoreWins = document.querySelector("div.score-wins");
  const scoreLosses = document.querySelector("div.score-losses");
  const scoreTies = document.querySelector("div.score-ties");

  scoreWins.textContent = score.win === 0 ? "" : `You win: ${score.win}`;
  scoreLosses.textContent =
    score.lose === 0 ? "" : `Computer win: ${score.lose}`;
  scoreTies.textContent = score.tie === 0 ? "" : `Tie: ${score.tie}`;
}

function game() {
  //set up game interface buttons
  const body = document.querySelector("body");
  const rockBtn = document.createElement("div");
  rockBtn.textContent = "Rock";
  rockBtn.classList.add("rock", "button");
  const scissorBtn = document.createElement("div");
  scissorBtn.textContent = "Scissors";
  scissorBtn.classList.add("scissors", "button");
  const paperBtn = document.createElement("div");
  paperBtn.textContent = "Paper";
  paperBtn.classList.add("paper", "button");

  const buttons = [rockBtn, scissorBtn, paperBtn];
  buttons.forEach((button) => {
    button.addEventListener("click", playRound);
    body.appendChild(button);
  });

  //set up scoreDisplay
  const scoreBoard = document.createElement("div");
  scoreBoard.classList.add("scoreboard");
  const scoreWins = document.createElement("div");
  scoreWins.classList.add("score-wins");
  const scoreLosses = document.createElement("div");
  scoreLosses.classList.add("score-losses");
  const scoreTies = document.createElement("div");
  scoreTies.classList.add("score-ties");
  scoreBoard.appendChild(scoreWins);
  scoreBoard.appendChild(scoreLosses);
  scoreBoard.appendChild(scoreTies);
  body.appendChild(scoreBoard);

  //   let wins = 0;
  //   let losses = 0;
  //   for (let i = 0; i < 5; i++) {
  //     let playerSelection = "";
  //     while (true) {
  //       playerSelection = prompt(
  //         "Pick either rock, paper, or scissors"
  //       ).toLowerCase();
  //       if (
  //         playerSelection == "rock" ||
  //         playerSelection == "paper" ||
  //         playerSelection == "scissors"
  //       ) {
  //         break;
  //       }
  //     }
  //     const computerSelection = computerPlay();
  //     if (playRound(playerSelection, computerSelection) < 0) {
  //       losses++;
  //     } else {
  //       wins++;
  //     }
  //   }
  //   reportScore(wins, losses, 5);
}

game();
