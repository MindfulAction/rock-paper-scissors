//Create function that will getComputerChoice of rock, paper, or scissors
let getComputerChoice = () => {
    //Declare variable computerChoice and initialize to empty string
    let computerChoice = "";
    //Generate a random number between 0 and 9 that will be used for deciding computer's choice
    let randomNumber = Math.floor(Math.random() * 10);
    //Use while loop to ensure randomNumber is between 0-8 so we can properly allocate an equal chance to each possible choice (0-2 = Rock, 3-5 = Paper, 
    //6-8 = Scissors, 9 = get a new randomNumber)
    while (randomNumber === 9) {
        randomNumber = Math.floor(Math.random() * 10);
    }
    //IF randomNumber is betwen 0-2 then set computerChoice to rock
        //ELSE IF randomNumber is between 3-5 then set computerChoice to paper
        //ELSE IF randomNumber is betwwen 6-8 then set computerChoice to scissors
    if (randomNumber <= 2) {
        return computerChoice = "Rock";
    } else if (randomNumber <= 5) {
        return computerChoice = "Paper";
    } else if (randomNumber <= 8) {
        return computerChoice = "Scissors";
    }
}

let initializeGame = () => {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    ties.textContent = 0;
    document.querySelector(".paper").style.display = "";  
    document.querySelector(".scissors").style.display = "";

}

//NEED TO FINISH RESTART FUNCTION AND CLEAN UP CODE

let restartGamePrompt = () => {
    document.querySelector(".paper").style.display = "none";  
    document.querySelector(".scissors").style.display = "none";
    let restartButton = document.querySelector(".rock");
    restartButton.textContent = "Play Again";
    restartButton.addEventListener("click", initializeGame())

}

let checkIfGameOver = (playerScore, computerScore) => {

    if (playerScore == 5) {
        results.textContent = `YOU WIN!!`;
    } else if (computerScore == 5) {
        results.textContent = `Sorry, you lost.`;
    }
    if (playerScore == 5 || computerScore == 5) {
        restartGamePrompt();
    }
}

//Create function with two parameters, playerInput and computerSelection, that plays a round
let playRound = (playerInput) => {
    //Create variable computerSelection that stores value of getComputerChoice
    console.log(`YOU CHOSE: ${playerInput}`)
    let computerSelection = getComputerChoice();
    console.log( "The computer chose: " + computerSelection);
    
    //Create possible win and loss conditions as per rock/paper/scissors game's rules
    if (computerSelection.toLowerCase() === playerInput) {
         results.textContent =`You both chose ${computerSelection}! It's a tie!`;
    } else if (computerSelection === "Rock" & playerInput === "paper") {
        results.textContent ="You win! Paper beats Rock!"
    } else if (computerSelection === "Rock" & playerInput === "scissors") {
        results.textContent ="You lose! Rock beats Scissors!"
    } else if (computerSelection === "Paper" & playerInput === "rock") {
        results.textContent ="You lose! Paper beats Rock!"
    } else if (computerSelection === "Paper" & playerInput === "scissors") {
        results.textContent ="You win! Scissors beats Paper!"
    }  else if ( computerSelection === "Scissors" & playerInput === "rock") {
        results.textContent ="You win! Rock beats Scissors!"
    } else if ( computerSelection === "Scissors" & playerInput === "paper") {
        results.textContent ="You lose! Scissors beats paper!"
    }
    if (results.textContent.includes("win")) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1
       } else if (results.textContent.includes("lose")) {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
       } else { 
        ties.textContent = parseInt(ties.textContent) + 1;
       }

       console.log(`results value at end of round: ${results}`)
    checkIfGameOver(playerScore.textContent, computerScore.textContent);
}

//Create function checkIfPlayerChoiceValid with two parameters: one for playerSelection, one for initialValidityOfPlayerChoice to check if player input is valid
let checkIfPlayerChoiceValid = (playerSelection, initialValidityOfPlayerChoice) => {
    //Create var isNewChoiceValid and init to initialValidityOfPlayerChoice
    let isNewChoiceValid = initialValidityOfPlayerChoice;
    //Create if conditionals that will check to see if playerSelection is either 'rock' 'paper' or 'scissors' and will return isNewChoiceValid as true if so; else
    //return false
    if (playerSelection === "rock") {
        return isNewChoiceValid = true;  
      } else if (playerSelection === "paper") {
          return isNewChoiceValid = true;
      } else if (playerSelection === "scissors") {
          return isNewChoiceValid = true;
      } return false;
}

let playGame = () => {
    //Declare var computerWins, playerWins, and ties to keep track of score
    let computerWins = 0;
    let playerWins = 0;
    let ties = 0;
    //Iterate through a certain amount of rounds
    for (let i = 0; i < 5; i++) {
        //Prompt user to input a string of rock, paper, or scissors and store value as lower case string (to bypass case sensitivity) in playerSelection
        let playerSelection = prompt("Please type Rock, Paper, or Scissors: ").toLowerCase();
        //Declare var isPlayerSelectionValid and initialize to false
        let isPlayerSelectionValid = false;
        //Check to see if playerSelection is valid
        isPlayerSelectionValid = checkIfPlayerChoiceValid(playerSelection, isPlayerSelectionValid);
        
        //Create while loop that prompts user for valid input if isPlayerSelectionValid is false
        while (isPlayerSelectionValid === false) {
            playerSelection = prompt('No, you goofnut! You can only type Rock, Paper, or Scissors.').toLowerCase();
            isPlayerSelectionValid = checkIfPlayerChoiceValid(playerSelection, isPlayerSelectionValid);
        }
        //Display current round number
        console.log(`Round ${i + 1}:`)
        //Generate computerSelection for this round
        let computerSelection = getComputerChoice();
        //Store roundResult
        let roundResult = playRound(playerSelection, computerSelection);
        //Display results of this round
       console.log(roundResult);
       //Increase playerWins, computerWins, or ties by 1 depending on the victor of the round
       if (roundResult.includes("win")) {
        playerWins += 1;
       } else if (roundResult.includes("lose")) {
        computerWins += 1;
       } else { 
        ties += 1;
       }
       //Display message displaying current values of playerWins, computerWins, and ties
       console.log(`You have won ${playerWins} rounds. 
       The computer has won ${computerWins} rounds.
       There are ${ties} ties.`)
    }
    //Display a message declaring the winner of the game
    if (computerWins > playerWins) {
        console.log(`You lost the game!`)
    } else if (playerWins > computerWins) {
        console.log(`You won the game!`)
    } else {
        console.log('Nobody won the game. It\'s a tie!');
    }
}

let initializeResults = () => {
    let results = document.querySelector(".results");
    return results;
}

let initializePlayerChoices = () => {
    let playerChoices = document.querySelectorAll('#playerChoice');
    playerChoices.forEach(choice => choice.addEventListener('click', () => playRound(choice.className)));
    return playerChoices;
}



let results = document.querySelector(".results");

let playerChoices = document.querySelectorAll('#playerChoice');
playerChoices.forEach(choice => choice.addEventListener('click', () => playRound(choice.className)));

let computerScore = document.querySelector(".computerScore");
let playerScore = document.querySelector(".playerScore");
let ties = document.querySelector(".ties")


