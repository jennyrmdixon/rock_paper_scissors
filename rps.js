//Choose pick for game at random
function computerPlay () {
let computerOptions = ["rock", "paper", "scissors"]
return computerOptions[Math.floor(Math.random() * 3)];
}

//Computer places guess and response is returend back to user
function computerTurn () {
    let computerSelection = computerPlay();
    console.log("Computer guessed: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

//Allows user to enter their guess and display it back to them

function playerTurn () {
    let playerSelection = prompt ("Enter Your Choice.", "").toLowerCase(); 
    console.log("You guessed: " + playerSelection);
    window.playerSelection = playerSelection;
}

//Variable used to keep score at each round
let scoreCounter = 0;


//Allows user to enter their guess and display it back to them
function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
return "It's a tie";
} else if  (playerSelection === "rock" && computerSelection === "scissors") {
    scoreCounter = ++scoreCounter;
return "You win! Rock beats scissors.";
} else if (playerSelection === "paper" && computerSelection === "rock") {
    scoreCounter = ++scoreCounter;
return "You win! Paper beats rock.";
} else if (playerSelection === "scissors" && computerSelection === "paper") {
    scoreCounter = ++scoreCounter;
 return "You win! Scissors beats paper.";
} else if (playerSelection === "rock" && computerSelection === "paper") {
    scoreCounter = --scoreCounter;
 return "You lose! Paper beats rock.";
} else if (playerSelection === "scissors" && computerSelection === "rock") {
    scoreCounter = --scoreCounter;
return "You lose! Rock beats scissors.";
} else if (playerSelection === "paper" && computerSelection === "scissors") {
    scoreCounter = --scoreCounter;
return "You lose! Scissors beats paper.";
} else  { 
return "I don't understand your answer.";

}
}


//Play a five round game and return results
function game (){
for (let i = 0; i < 5; i++) {
if  (i<4) { 
    playerTurn();
    computerTurn();
}
else if (i = 4) { 
    playerTurn();
    computerTurn();
    if (scoreCounter === 0) {
        console.log("The game ended in a tie.");
    }
    else if (scoreCounter > 0) {
        console.log("You won the game!");
    }
    else if (scoreCounter < 0) {
        console.log("You lost the game!");
    }
    else {
        console.log("Something went wrong.");

    }
}
}
}
game ();

