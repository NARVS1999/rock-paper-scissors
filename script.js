let computerValue1 = "rock";
let computerValue2 = "paper";
let computerValue3 = "scissors";
let playerWin = "You win the game!"
let playerLoss = "You loss the game!";
let playerTie = "This game is a tie";
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

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
    playerSelection = prompt("Write rock/paper/scissors: ");
    computerSelection = computerPlay();
    console.log("your choice: "  + playerSelection);
    if (playerSelection == "rock" && computerSelection == computerValue3) {
        console.log(playerWin);
        ++playerScore;
        return  playerWin;
    } else if (playerSelection == "rock" && computerSelection == computerValue2) {
        console.log(playerLoss);
        ++computerScore;
        return playerLoss;
    } else if (playerSelection == "paper" && computerSelection == computerValue1) {
        console.log(playerWin);
        ++playerScore;
        return playerWin; 
    } else if (playerSelection == "paper" && computerSelection == computerValue3) {
        console.log(playerLoss);
        ++computerScore;
        return playerLoss;
    } else if (playerSelection == "scissors" && computerSelection == computerValue2) {
        console.log(playerWin);
        ++playerScore;
        return playerWin;
    } else if (playerSelection == "scissors" && computerSelection == computerValue1) {
        console.log(playerLoss);
        ++computerScore;
        return playerLoss;
    } else {
        console.log(playerTie);
        return playerTie;
    }
}


function game() {

    for (let i = 1; i <= 5; ++i) {
        playRound(computerSelection, playerSelection);
        console.log("Player Score: " + playerScore + " | " + "Computer Score: " + computerScore);
    }
    
    if(playerScore > computerScore) {
        alert("You are a Winner to this game!!!");
    } else if (playerScore < computerScore) {
        alert("The Computer is Winner to this game!!!");
    } else {
        alert("The score are tie!!! there are no Winner.")
    }
}

game();
