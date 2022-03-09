function computerPlay() {
    const getRandomInt = max => Math.floor(Math.random() * max)

    const option = getRandomInt(3);

    console.log(option);

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