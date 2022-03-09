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


function game(){
    for (let i =0; i < 5; i++){
        let playerSelection = '';
        while (true){
             playerSelection = prompt("Pick either rock, paper, or scissors").toLowerCase();
             if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
                 break;
             }
        }
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    
    }
}

game();