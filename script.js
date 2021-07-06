let computerValue1 = "rock";
let computerValue2 = "paper";
let computerValue3 = "scissors";
let computerSelection = computerPlay();
let playerSelection = prompt("Write rock/paper/scissors: ");
console.log("your choice: "  + playerSelection);
let playerWin = "You win the game!"
let playerLoss = "YOu loss the game!";
let playerTie = "This game is a tie";

function computerPlay() {

    let randomValue = Math.floor(Math.random()*3) + 1;

    if (randomValue == 1) {
        console.log("computer choice: " + computerValue1);
        return computerValue1;
    } else if (randomValue == 2) {
        console.log("computer choice: " + computerValue2);
        return computerValue2;
    } else {
        console.log("computer choice: " + computerValue3);
        return computerValue3;
    }
}



function playRound (computerSelection, playerSelection) {
    if (playerSelection == "rock" && computerSelection == computerValue3) {
        console.log(playerWin);
        return  playerWin;
    } else if (playerSelection == "rock" && computerSelection == computerValue2) {
        console.log(playerLoss);
        return playerLoss;
    } else if (playerSelection == "paper" && computerSelection == computerValue1) {
        console.log(playerWin);
        return playerWin; 
    } else if (playerSelection == "paper" && computerSelection == computerValue3) {
        console.log(playerLoss);
        return playerLoss;
    } else if (playerSelection == "scissors" && computerSelection == computerValue2) {
        console.log(playerWin);
        return playerWin;
    } else if (playerSelection == "scissors" && computerSelection == computerValue1) {
        console.log(playerLoss);
        return playerLoss;
    } else {
        console.log(playerTie);
        return playerTie;
    }
}

function game() {
    
}

playRound(computerSelection, playerSelection);