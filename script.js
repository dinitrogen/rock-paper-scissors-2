let playerMove;
let computerMove;
let playerWins = 0;
let computerWins = 0;
let scoreString = `You: ${ playerWins } - Computer: ${ computerWins }`;

const roundOutcome = document.querySelector('#roundOutcome');
const scoreboard = document.querySelector('#scoreboard');
const finalOutcome = document.querySelector('#finalOutcome');
const playAgain = document.querySelector('#playAgain');
const playAgainButton = document.createElement('button');
playAgainButton.innerText = "Play Again?";


const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', () => {
    playerMove = "rock";
    computerPlay();
    playRound(playerMove, computerMove);
    scoreboard.innerText = `You: ${ playerWins } - Computer: ${ computerWins }`;
    checkScore();
});


const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () => {
    playerMove = "paper";
    computerPlay();
    playRound(playerMove, computerMove);
    scoreboard.innerText = `You: ${ playerWins } - Computer: ${ computerWins }`;
    checkScore();
});


const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', () => {
    playerMove = "scissors";
    computerPlay();
    playRound(playerMove, computerMove);
    scoreboard.innerText = `You: ${ playerWins } - Computer: ${ computerWins }`;
    checkScore();
});


playAgainButton.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;
    scoreboard.innerText = `You: ${ playerWins } - Computer: ${ computerWins }`;
    finalOutcome.innerText = "";
    playAgain.removeChild(playAgainButton);
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
});


function computerPlay() {
    let computerNum = Math.floor(Math.random() * 1000) % 3;
    if (computerNum === 0) {
        computerMove = "rock";
    }
    else if (computerNum === 1) {
        computerMove = "paper";
    }
    else {
        computerMove = "scissors";
    }
    return computerMove;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            roundOutcome.innerText = "You tie! You both chose rock!";
            return;
        }
        else if (computerSelection === "paper") {
            computerWins++;
            roundOutcome.innerText = "You lose! Paper beats rock!";
            return;
        }
        else {
            playerWins++;
            roundOutcome.innerText = "You win! Rock beats scissors!";
            return;
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerWins++;
            roundOutcome.innerText = "You win! Paper beats rock!";
            return;
        }
        else if (computerSelection === "paper") {
            roundOutcome.innerText = "You tie! You both chose paper!";
            return;
        }
        else {
            computerWins++;
            roundOutcome.innerText = "You lose! Scissors beats paper!";
            return;
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerWins++;
            roundOutcome.innerText = "You lose! Rock beats scissors!";
            return;
        }
        else if (computerSelection === "paper") {
            playerWins++;
            roundOutcome.innerText = "You win! Scissors beats paper!";
            return;
        }
        else {
            roundOutcome.innerText = "You tie! You both chose scissors!";
            return;
        }
    }
}


function checkScore() {
    if (playerWins >= 5) {
        finalOutcome.innerText = "CONGRATULATIONS!!! YOU WON THE MATCH!!!";
    }
    else if (computerWins >=5) {
        finalOutcome.innerText = "Computer won the match. Better luck next time!";
    }
    else {
        return;
    }
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    playAgain.appendChild(playAgainButton);
    return;
}


