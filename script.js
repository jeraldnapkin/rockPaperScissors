

// Generating random choice




let test = '';
function computerPlay() {
    test = Math.floor(Math.random()*3)
    
    if (test === 0) {
        return 'rock'
    } else if (test === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

// Declaring winner function

function winner (playerSelection,computer) {

    if (playerSelection === 'rock' && computer === 'scissors') {
        return 'You win!'
    } else if (playerSelection === 'scissors' && computer === 'paper') {
        return 'You win!'
    } else if (playerSelection === 'paper' && computer === 'rock') {
        return 'You win!'
    } else if (playerSelection === computer) {
        return 'Its a tie!'
    }  else {
        return 'You lose!'
    }   
}

// Recalling functions and generating user input

function game() {
    computer = computerPlay();
    let playerSelection = prompt('Enter Rock,paper or scissors: ', '')
    playerSelection = playerSelection.toLowerCase();
    console.log(`Computer selected: ${computer}`);
    console.log(`Player selected: ${playerSelection}`)
    win = console.log(winner(playerSelection,computer))
}


game();