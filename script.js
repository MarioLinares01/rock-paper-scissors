// This file contains the necessary functions to play `Rock Paper Scissors`.

function getComputerChoice() { 
    /* This function will return the computers choice as a
    string('Rock', 'Paper', or 'Scissors') */
    let choice = Math.floor(Math.random() * 3); // get a random Int from 0 - 2
    if (choice == 0) {
        console.log('Rock');
        return 'Rock';
    } else if (choice == 1) {
        console.log('Paper');
        return 'Paper';
    } else {
        console.log('Scissors');
        return 'Scissors';
    }
}
