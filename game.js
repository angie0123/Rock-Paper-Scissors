function computerPlay() {
    const getRandomInt = max => Math.floor(Math.random() * max)

    const option = getRandomInt(3);

    if (option === 0){
        return 'rock'
    } 
    if (option === 1){
        return 'paper'
    }
    if (option === 2){
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection;
    const computer = computerSelection; 
    console.log(`Player played: ${player}`);
    console.log(`Computer played: ${computer}`);

    if (player == 'rock'){
        if (computer == 'rock'){
            return 0
        }
        if (computer == 'scissors'){
            return 1
        }
        if (computer == 'paper'){
            return -1
        }
    }
    if (player == 'scissors'){
        if (computer == 'rock'){
            return -1
        }
        if (computer == 'scissors'){
            return 0
        }
        if (computer == 'paper'){
            return 1
        }
    }
    if (player == 'paper'){
        if (computer == 'rock'){
            return 1
        }
        if (computer == 'scissors'){
            return -1
        }
        if (computer == 'paper'){
            return 0
        }
    }
}

function reportScore(wins, losses, totalGames){
    (wins > losses) ? console.log('You win!') : console.log('You lose.')
        console.log('Wins: ' + wins)
        console.log('Losses: ' + losses );
        console.log('Ties: ' + (totalGames - wins - losses))
}


function game(){
    let wins = 0;
    let losses = 0;
    for (let i =0; i < 5; i++){
        let playerSelection = '';
        while (true){
             playerSelection = prompt("Pick either rock, paper, or scissors").toLowerCase();
             if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
                 break;
             }
        }
        const computerSelection = computerPlay();
        if (playRound(playerSelection, computerSelection) < 0 ) {
            losses ++;
        }
        else {
            wins ++; 
        }
    }
    reportScore(wins, losses, 5);
    
    }


game();