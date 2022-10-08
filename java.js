let playerScore = 0;
let computerScore = 0;
let roundResult = ''

const player = document.querySelector("#player-score")
player.textContent = `Player score: ${playerScore}`

const computer = document.querySelector("#computer-score")
computer.textContent = `Computer score: ${computerScore}`

const round = document.querySelector("#text-score")
round.textContent = `Round result: ${roundResult}`

let choices = document.querySelectorAll("button")

let playerChoice = '';

choices.forEach(function (button) {
    button.addEventListener("click", function () {
        playerChoice = button.className;
        playRound(getPlayerChoice(), getComputerChoice())
        if (playerScore == 10) {
            round.textContent = `You beated the machine :D`
            playerScore = 0;
            computerScore = 0;
            player.textContent = `Player score: ${playerScore}`
            computer.textContent = `Computer score: ${computerScore}`

        } else if (computerScore == 10) {
            round.textContent = `You got beated by the machine :S`
            playerScore = 0;
            computerScore = 0;
            player.textContent = `Player score: ${playerScore}`
            computer.textContent = `Computer score: ${computerScore}`
        }
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
        roundResult = 'You won!'
        round.textContent = `Round result: ${roundResult}`

        playerScore += 1
        player.textContent = `Player score: ${playerScore}`


    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')) {
        roundResult = 'You lost!'
        round.textContent = `Round result: ${roundResult}`

        computerScore += 1
        computer.textContent = `Computer score: ${computerScore}`

    } else {
        roundResult = 'Draw!'
        round.textContent = `Round result: ${roundResult}`
    }
}
