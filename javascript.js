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
    document.querySelector(".rock").style.display = "";
    results.textContent = "LETS GET READY TO ROCK!!!! (or paper, or scissors)"


}

//NEED TO FINISH RESTART FUNCTION AND CLEAN UP CODE

let hidePlayerChoices = () => {
    document.querySelector(".rock").style.display = "none";
    document.querySelector(".paper").style.display = "none";
    document.querySelector(".scissors").style.display = "none";
}

let restartGamePrompt = () => {
    hidePlayerChoices();
    const restartInstructions = results;
    restartInstructions.textContent = "Press ENTER to Play Again";
    document.addEventListener("keydown", (key) => {
        if (key.keyCode == 13) {
            initializeGame();
        }
    })
}

let checkIfGameOver = () => {
    if (playerScore.textContent == 5) {
        results.textContent = `YOU WIN!!`;
    } else if (computerScore.textContent == 5) {
        results.textContent = `Sorry, you lost.`;
    }
    if (playerScore.textContent == 5 || computerScore.textContent == 5) {
        restartGamePrompt();
    }
}

let updateScore = () => {
    if (results.textContent.includes("win")) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1
       } else if (results.textContent.includes("lose")) {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
       } else { 
        ties.textContent = parseInt(ties.textContent) + 1;
       }
}

//Create function with one parameter, playerInput, that plays a round
let playRound = (playerInput) => {
    //Create variable computerSelection that stores value of getComputerChoice
    let computerSelection = getComputerChoice();
    
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
    updateScore();
    checkIfGameOver();
}


let results = document.querySelector(".results");
results.textContent = "LETS GET READY TO ROCK!!!! (or paper, or scissors)"

let playerChoices = document.querySelectorAll('#playerChoice');
playerChoices.forEach(choice => choice.addEventListener('click', () => playRound(choice.className)));

let computerScore = document.querySelector(".computerScore");
let playerScore = document.querySelector(".playerScore");
let ties = document.querySelector(".ties")


