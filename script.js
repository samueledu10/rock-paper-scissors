"use strict"

function getComputerChoice() {
    let min  = 1;
    let max = 3;

    switch(Math.floor(Math.random() * (max - min + 1) + min)) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let lowerCasePlayerSelection = playerSelection.toLowerCase();

    if (lowerCasePlayerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    } 

    if (lowerCasePlayerSelection === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
    } else if (lowerCasePlayerSelection === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock";
    } else if (lowerCasePlayerSelection === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors beat Paper";
    } else {
        return "You lose! " + computerSelection + " beats " + lowerCasePlayerSelection.replace(lowerCasePlayerSelection.charAt(0), lowerCasePlayerSelection.charAt(0).toUpperCase());
    }
}


function game() {
    for (let i = 0; i < 5; ++i) {
        
        let playerChoice = prompt("Rock, Paper, Scissors Go:");
        let winner = playRound(playerChoice, getComputerChoice());

        console.log(winner);
    }
}

game();