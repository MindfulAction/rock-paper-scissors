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

//Create function with two parameters, playerInput and computerSelection, that plays a round
let playRound = (playerInput, computerSelection) => {
    //Set playerInput arguement to new variable playerSelection that converts to lower case to bypass case sensitivity 
    let playerSelection = playerInput.toLowerCase();
    console.log( "The computer chose: " + computerSelection);
    //Create possible win and loss conditions as per rock/paper/scissors game's rules
    if (computerSelection.toLowerCase() === playerSelection) {
        return `You both chose ${computerSelection}! It's a tie!`
    } else if (computerSelection === "Rock" & playerSelection === "paper") {
        return "You win! Paper beats Rock!"
    } else if (computerSelection === "Rock" & playerSelection === "scissors") {
        return "You lose! Rock beats Scissors!"
    } else if (computerSelection === "Paper" & playerSelection === "rock") {
        return "You lose! Paper beats Rock!"
    } else if (computerSelection === "Paper" & playerSelection === "scissors") {
        return "You win! Scissors beats Paper!"
    }  else if ( computerSelection === "Scissors" & playerSelection === "rock") {
        return "You win! Rock beats Scissors!"
    } else if ( computerSelection === "Scissors" & playerSelection === "paper") {
        return "You lose! Scissors beats paper!"
    }
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

playGame();