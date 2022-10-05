let playerScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let result = '';
    let randomNumber = Math.random();
    if (randomNumber < 0.333) {
        result = 'rock';
    } else if (randomNumber > 0.333 && randomNumber < 0.666) {
        result = 'paper';
    } else {
        result = 'scissors'
    };
    return result;
}


