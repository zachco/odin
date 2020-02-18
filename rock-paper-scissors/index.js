let playerScore = 0;
let computerScore = 0;

function oneRound() {

function chooseRandom() {
    return (Math.floor(Math.random()*3) + 1);
}

let computerSelection = chooseRandom();

function computerPlay() {
    if (computerSelection == 1) {
        return "Rock";
    } else if (computerSelection == 2) {
        return "Paper";
    } else if (computerSelection == 3) {
        return "Scissors";
    }
}

const caseComputer = computerPlay();

function computerCase() {
    let upcase = caseComputer.toUpperCase();
    return upcase;
}

function playerSelection() {
    let playerPick = prompt("Choose Rock, Paper, or Scissors");
    let pickPlayer = playerPick;
    let pickCase = pickPlayer.toUpperCase();
    return pickCase;
}

let computerPick = computerCase();
let playerPick = playerSelection;

function playRound() {
    if(computerPick === playerPick) {
        computerScore = computerScore;
        playerScore = playerScore;
        return "Tie!";
    } else if (computerPick == "Rock" && playerPick == "Paper") {
        playerScore++;
        computerScore = computerScore;
        return "You won! Paper beats Rock";
    } else if (computerPick == "Paper" && playerPick == "Scissors") {
        playerScore++;
        computerScore = computerScore;
        return "You won! Scissors beats Paper";
    } else if (computerPick == "Scissors" && playerPick == "Rock"){
        playerScore++;
        computerScore = computerScore;
        return "You won! Rock beats Scissors";
    } else if (playerPick == "Rock" && computerPick == "Paper") {
        computerScore++;
        playerScore = playerScore;
        return "You lose! Paper beats Rock";
    } else if (playerPick == "Scissors" && computerPick == "Rock") {
        computerScore++;
        playerScore = playerScore;
        return "You lose! Rock beats Scissors";
    } else if (playerPick == "Paper" && computerPick == "Rock") {
        computerScore++;
        playerScore = playerScore;
        return "You lose! Scissors beats Paper";
    }
}
    console.log(playRound());
}

function game() {
    oneRound();
    oneRound();
    oneRound();
    oneRound();
    oneRound();
}

game();

if (playerScore>computerScore) {
    alert("You win!");
} else if (playerScore==computerScore) {
    alert("It's a tie!");
} else {
    alert("You lose!");
}