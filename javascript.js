// Rock paper scissor simulation
// Start with the computer response
// Randomly return "Rock", "Paper" or "Scissors"


const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let getComputerChoice = Math.floor(Math.random() * 3) + 1;
if(getComputerChoice <= 1) {
    getComputerChoice = rock
} else if(getComputerChoice <= 2) {
    getComputerChoice = paper
} else {
    getComputerChoice = scissors
}

// Play a single round of RPS
// Player selects Rock, paper or scissors
// Computer selects rock, paper or scissors
// Either player wins, computer wins, or it is a tie
// If it ends up in a tie -> play again until one wins
// After one wins -> Give a winning message

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return tie = "It's a tie, go again!"
    }
    else if(playerSelection === rock) {
        if(computerSelection === paper) {
            return computerWin = "You lose! Paper beats rock!"
        } else if(computerSelection === scissors) {
            return playerWin = "You win! Rock destroys scissors!"
        }
    } else if(playerSelection === paper) {
        if(computerSelection === rock) {
            return playerWin = "You win! Paper beats rock!"
        } else if(computerSelection === scissors) {
            return computerWin = "You lose! Scissors destryos paper!"
        }
    } else if(playerSelection === scissors) {
        if(computerSelection === rock) {
            return computerWin = "You lose! Rock destroys scissors!"
        } else if(computerSelection === paper) {
            return playerWin = "You win! Scissors destroys paper!"
        }
    }
}


const playerSelection = "SCissors"
function capitalize(playerSelection) {
    const capitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    return capitalized
  }
const computerSelection = getComputerChoice;
console.log(playRound(capitalize(playerSelection), computerSelection));

// Create function that keeps score between player and computer
// if player beats computer, up score with 1
// when player or computer reaches 3, end game

let playerScore = 0;
let computerScore = 0;

function game(playerScore, computerScore) {
    if(playRound === playerWin) {
        playerScore++
    } else if(playRound === computerWin) {
        computerScore++
    } else {
        game
    }
}
console.log(playerScore);
console.log(computerScore);