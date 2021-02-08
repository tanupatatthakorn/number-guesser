let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// function to generate random num from 0-9.
const generateTarget = () => Math.floor(Math.random()*9);

// func to determine winner
const compareGuesses = (user, comp, target) => {
    let userDiff = Math.abs(user - target);
    let compDiff = Math.abs(comp - target);

    if (userDiff == compDiff) {
        return true;
    } else if (userDiff < compDiff) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else {
        console.log('Invalid winner.');
    }
}

const advanceRound = () => currentRoundNumber++;
