function computerPlay() {
    const getRandomInt = max => Math.floor(Math.random() * max)

    const option = getRandomInt(3);

    if (option === 0){
        return 'Rock'
    } 
    if (option === 1){
        return 'Paper'
    }
    if (option === 2){
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    console.log(`Player played: ${player}`);
    console.log(`Computer played: ${computer}`);

    if (player == 'rock'){
        if (computer == 'rock'){
            return "It's a tie! You both had Rock"
        }
        if (computer == 'scissors'){
            return 'You win! Rock beats Scissors'
        }
        if (computer == 'paper'){
            return 'You lose! Paper beats Rock'
        }
    }
    if (player == 'scissors'){
        if (computer == 'rock'){
            return "You lose! Rock beats Scissors"
        }
        if (computer == 'scissors'){
            return "It's a tie! You both had Scissors"
        }
        if (computer == 'paper'){
            return 'You win! Scissors beats Paper'
        }
    }
    if (player == 'paper'){
        if (computer == 'rock'){
            return "You win! Paper beats Rock"
        }
        if (computer == 'scissors'){
            return "You lose! Scissors beats Paper"
        }
        if (computer == 'paper'){
            return "It's a tie! You both had Paper"
        }
    }
}

console.log(playRound('rock', computerPlay()));

