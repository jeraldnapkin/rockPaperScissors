

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

function winner(playerSelection,computer) {

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
let user_score = 0 ;
let pc_score = 0;
let score = 0;
let round = 0;






// Recalling functions and generating user input

function game() {
    console.clear();
    computer = computerPlay();
    let playerSelection = prompt('Enter Rock,paper or scissors: ', '')
    playerSelection = playerSelection.toLowerCase();
    console.log(`Computer selected: ${computer}`);
    console.log(`Player selected: ${playerSelection}`)
    win = winner(playerSelection,computer);

    if (win === 'You win!') {
        user_score++;
        round++;
    } else if (win === 'You lose!') {
        pc_score++;
        round++;
    } else {
        round++;
    }

    

    console.log(win)
    console.log('Your score is: ' + user_score)
    console.log('Computer score is: ' + pc_score)
    console.log('Current round: ' + round)
    
    if (user_score === 5) {
        console.log('You win first to 5!')
        user_score = 0;
        pc_score = 0;
        round = 0;
        console.log("##### Reseting results ######")
    } else if (pc_score === 5) {
        console.log('Computer wins first to 5!')
        user_score = 0;
        pc_score = 0;
        round = 0;
        console.log("##### Reseting results ##### ")
    } else {
        console.log('Game goes on...')
    }
    
}


game();


