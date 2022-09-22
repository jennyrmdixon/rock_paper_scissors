 let userScore = 0;
 let computerScore = 0;
 let roundMessage = "Click a button to start a round.";
 let gameMessage = "Results of game will be displayed once a player gains 5 points.";

 //Play round and track results up until 5 points are earned

function playRound(playerSelection) {

    //Computer makes a random selection.
    let computerOptions = ["rock", "paper", "scissors"];
    let computerSelection = computerOptions[Math.floor(Math.random() * 3)];

    //Determine results of the round
    if (playerSelection === computerSelection) {
        roundMessage = "It's a tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore = ++userScore;
        roundMessage = "You win! Rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore = ++userScore;
        roundMessage = "You win! Paper beats rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore = ++userScore;
        roundMessage = "You win! Scissors beats paper.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore = ++computerScore;
        roundMessage = "You lose! Paper beats rock.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore = ++computerScore;
        roundMessage =  "You lose! Rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore = ++computerScore;
        roundMessage = "You lose! Scissors beats paper.";
    } else {
        roundMessage = "I don't understand your answer.";

    }
    //Display results of the round
    displayRoundResults.textContent = roundMessage;

    //Determine results of the round
    if (computerScore === 5) {
        gameMessage = "You lost the game";
    }
    else if (userScore === 5) {
        gameMessage = "You won the game!";
    }

    //Determine results of the game
    displayGameResults.textContent = gameMessage;

}

//Take player choice from button
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

let playerSelection;

rockButton.addEventListener('click', () => {
playRound("rock");
  });

paperButton.addEventListener('click', () => {
 playRound("paper");
  });
  
scissorsButton.addEventListener('click', () => {
  playRound("scissors");
  });
  
//Display results to user
const displayRoundResults = document.querySelector('#roundResults');
displayRoundResults.textContent = roundMessage;
const displayGameResults = document.querySelector('#gameResults');

  