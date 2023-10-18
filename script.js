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
        result = 'You loose! Scissors beat Paper.'
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result = "You loose! Rock beats scissors.";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = 'You win! Scissors beat Paper.';
    }
    return result;
}

// This function will run multiple rounds of 'Rock, Paper, Scissors'
let computer_score = 0
let player_score = 0
function game(playerSelection) {
    const display_player_score = document.querySelector('.player-score')
    const display_computer_score = document.querySelector('.computer-score')
    const display_results = document.querySelector('.text')
    const winner = document.querySelector('.winner')
    const textnode = document.createElement("li")

    let userChoice = playerSelection
    let computerChoice = getComputerChoice();
    let result = playRound(userChoice, computerChoice);

    if (result.includes('win')) {
        player_score += 1
        display_player_score.textContent = player_score.toString()
    } else {
        computer_score += 1
        display_computer_score.textContent = computer_score.toString()
    }

    textnode.textContent = result
    display_results.appendChild(textnode)
    if (player_score == 5) {
        winner.textContent = 'You are the final winner!'
    } 
    if (computer_score == 5) {
        winner.textContent = 'The computer is the final winner!'
    }
}

const rock_btn = document.querySelector('.rock-btn')
rock_btn.addEventListener('click', function(e) {
    game('rock')
})

const paper_btn = document.querySelector('.paper-btn')
paper_btn.addEventListener('click', function(e) {
    game('paper')
})

const scissors_btn = document.querySelector('.scissors-btn')
scissors_btn.addEventListener('click', function(e) {
    game('scissors')
})