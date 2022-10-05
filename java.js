let playerScore = 0;
let computerScore = 0;

const player = document.querySelector("#player-score")
player.textContent = `Player score: ${playerScore}`

const computer = document.querySelector("#computer-score")
computer.textContent = `Computer score: ${computerScore}`

let choices = document.querySelectorAll("button")

let playerChoice = '';
choices.forEach(function (button) {
    button.addEventListener("click", function () {
        playerChoice = button.className;
        playRound(getPlayerChoice(), getComputerChoice())
    })
})

function getPlayerChoice() {
    return playerChoice;
}

function getComputerChoice() {
    let computerChoice = '';
    let randomNumber = Math.random();
    if (randomNumber < 0.333) {
        computerChoice = 'rock';
    } else if (randomNumber > 0.333 && randomNumber < 0.666) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors'
    };
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        console.log('You won!')
        playerScore += 1
        player.textContent = `Player score: ${playerScore}`

    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')) {
        console.log('You lost!')
        computerScore += 1
        computer.textContent = `Computer score: ${computerScore}`

    } else {
        console.log('Draw!')
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice())
    }
}