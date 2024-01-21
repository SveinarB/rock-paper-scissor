// Rock paper scissor simulation
// Start with the computer response
// Randomly return "Rock", "Paper" or "Scissors"


const choice1 = "Rock";
const choice2 = "Paper";
const choice3 = "Scissors";

let getComputerChoice = Math.floor(Math.random() * 3) + 1;
if(getComputerChoice <= 1) {
    getComputerChoice = choice1
} else if(getComputerChoice <= 2) {
    getComputerChoice = choice2
} else {
    getComputerChoice = choice3
}

// Play a single round of RPS
// Player selects Rock, paper or scissors
// Computer selects rock, paper or scissors
// Either player wins, computer wins, or it is a tie
// If it ends up in a tie -> play again until one wins
// After one wins -> Give a winning message

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "It's a tie, go again!"
    }
    else if(playerSelection === choice1) {
        if(computerSelection === choice2) {
            return "You lose! Paper beats rock!"
        } else if(computerSelection === choice3) {
            return "You win! Rock destroys scissors!"
        }
    } else if(playerSelection === choice2) {
        if(computerSelection === choice1) {
            return "You win! Paper beats rock!"
        } else if(computerSelection === choice3) {
            return "You lose! Scissors destryos paper!"
        }
    } else if(playerSelection === choice3) {
        if(computerSelection === choice1) {
            return "You lose! Rock destroys scissors!"
        } else if(computerSelection === choice2) {
            return "You win! Scissors destroys paper!"
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