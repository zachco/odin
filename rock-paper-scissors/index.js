function computerPlay() {
    random = Math.floor(Math.random() * 10);

    return random<3 ? 'Rock'
        : random <3 && random <6 ? 'Paper'
        : 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 'You win! Rock beats Scissors'
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'You win! Paper beats Rock'
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'You win! Scissors beats Paper'
    } else {
        return 'You lose!'
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = "";

    for (i = 1; i < 6; i++) {
        const playerSelection = prompt('Choose Rock, Paper or Scissors', 'Rock').toLowerCase();
        const computerSelection = computerPlay();

        result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i} - ${result}`)

        result.search('Win')=='-1' ? computerScore++ : playerScore++;

    }

    console.log(playerScore > computerScore ? 'Player Won!!' : 'Computer Won!!')
}

game();