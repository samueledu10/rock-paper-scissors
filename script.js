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
    
    if (playerSelection === computerSelection.toLowerCase()) {
        return "tie";
    } 

    if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "player"
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "player";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "player";
    } else {
        return "computer";
    }
}

function game() {
    //create three buttons
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    let userScore = 0;
    let cpScore = 0;
    
    //get to show the score and who won the round
    const player = document.querySelector(".player");
    const computer = document.querySelector(".computer");
    const resultText = document.querySelector(".results");

    player.textContent = `Player: ${userScore}`;
    computer.textContent = `Computer: ${cpScore}`;

    let computerChoice = getComputerChoice();

    
    //give each button a click event and play a round
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {

        button.addEventListener("click", () => {
        
            let result = playRound(button.getAttribute("id"), computerChoice);

            if (result === "player") {
                userScore += 1;
                resultText.textContent = "You win!";
            } else if (result === "computer") {
                resultText.textContent = "You lose!";
                cpScore += 1;
            } else {
                resultText.textContent = "It's a tie!";
            }
            
            // game over and reset the game
            if (userScore === 5) {
                resultText.textContent = "Game Over! You won the game!";
                userScore = 0;
                cpScore = 0;
            } else if (cpScore === 5) {
                resultText.textContent = "Game Over! You lose the game!";
                userScore = 0;
                cpScore = 0;
            }

            // show current score
            player.textContent = `Player: ${userScore}`;
            computer.textContent = `Computer: ${cpScore}`;

            // get new choice from computer
            computerChoice = getComputerChoice();
        });
    });

    //get container for the buttons
    const container = document.querySelector(".container");

    //put buttons inside the container
    container.appendChild(rockBtn);
    container.appendChild(paperBtn);
    container.appendChild(scissorsBtn);
}

game();