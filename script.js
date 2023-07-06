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


