const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    else {
        console.log('Error, Please Pick the Appropriate Tool')
    }
}
function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    if (number == 0) {
        return 'rock';
    }
    else if (number == 1) {
        return 'paper';
    }
    else {
        return 'scissors'
    }
}
var computerChoice = getComputerChoice();
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The Game Was a Tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry, The Computer Wins this one';
        }
        else {
            return 'Amazing, The User Wins';
        }
    }
    else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'Amazing, The User Wins';
        }
        else {
            return 'Sorry, The Computer Wins this one';
        }
    }
    else {
        if (computerChoice === 'rock') {
            return 'Sorry, The Computer Wins this one';
        }
        else {
            return 'Amazing, The User Wins';
        }
    }
}

function playGame() {

    userChoice = getUserChoice('Rock');
    computerChoice = getComputerChoice();
    console.log(`Welcome to the Game! Let's Begin. The User
  has Selected the Weapon: ${userChoice}. While the Computer has 
  Selected the Weapon: ${computerChoice}. Let's See who Wins!`);
    var winner = determineWinner(userChoice, computerChoice);
    console.log(winner);
}

playGame();

