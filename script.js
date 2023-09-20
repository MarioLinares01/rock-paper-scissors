// This file contains the necessary functions to play `Rock Paper Scissors`.

// This function will return the computers choice as a string('Rock', 'Paper', or 'Scissors')
function getComputerChoice() { 
    let choice = Math.floor(Math.random() * 3); // get a random Int from 0 - 2
    if (choice == 0) {
        return 'rock';
    } else if (choice == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// This function will play a single round and will return a string that declares the winner
function playRound(playerSelection, computerSelection) {
    let result = '';
    if (playerSelection == computerSelection) {
        result = "It's a draw!";
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        result = 'You loose! Paper beats Rock.'
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = 'You win! Rock beats Scissors.'
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = 'You win! Paper beats Rock';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result = 'You loose. Scissors beat Paper.'
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result = "You loose! Rock beats scissors.";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = 'You win! Scissors beat Rock.';
    }
    return result;
}
