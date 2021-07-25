

// Generating random choice

const userName = prompt('Hello, enter your name:', '')


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


let playerSelection =''


const btnRock = document.querySelector('#btn-1')
btnRock.addEventListener('click', function ()  {
    
    playerSelection = 'rock';
    game();
    
});

const btnPaper = document.querySelector('#btn-2')
btnPaper.addEventListener('click', function () {
    
    playerSelection = 'paper';
    game();
    
});


const btnScissors = document.querySelector('#btn-3')
btnScissors.addEventListener('click', function () {
    
    playerSelection = 'scissors';
    game();
    
});

console.log(playerSelection);

// Recalling functions and generating user input



const computerSelected = document.querySelector('.computerSel')
const playerSelected = document.querySelector('.playerSel')
const outcomeInfo  = document.querySelector('.info')
const currentRound = document.querySelector('.round')
const playerScoretest = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')

function game() {
    
    console.clear();
    computer = computerPlay();
    computerSelected.textContent = `Computer selected:      ${computer}`;
    playerSelected.textContent = `${userName} selected: ${playerSelection}`;
      // let playerSelection = prompt('Enter Rock,paper or scissors: ', '')
    //playerSelection = playerSelection.toLowerCase();
    console.log(`Computer selected: ${computer}`);
    console.log(`Player selected: ${playerSelection}`)
    win = winner(playerSelection,computer);

    if (win === 'You win!') {
        user_score++;
        round++;
        outcomeInfo.textContent = 'You win!'
    } else if (win === 'You lose!') {
        pc_score++;
        round++;
        outcomeInfo.textContent = 'You lose!'
    } else {
        round++;
        outcomeInfo.textContent = 'It\'s a tie!'
    }
    
    currentRound.textContent =`Current round: ${round}`
    computerScore.textContent=`Computer score: ${pc_score}`
    playerScoretest.textContent=`Player score: ${user_score}`
    

    console.log(win)
    console.log('Your score is: ' + user_score)
    console.log('Computer score is: ' + pc_score)
    console.log('Current round: ' + round)
    
    if (user_score === 5) {
        console.log('You win first to 5!')
        alert('You win first to 5!')
        user_score = 0;
        pc_score = 0;
        round = 0;
        console.log("##### Reseting results ######")
        outcomeInfo.textContent = 'You won the game!'

    } else if (pc_score === 5) {
        console.log('Computer wins first to 5!')
        alert('Computer wins first to 5!')
        user_score = 0;
        pc_score = 0;
        round = 0;
        console.log("##### Reseting results ##### ")
        outcomeInfo.textContent = ' You lost the game!'
    } else {
        console.log('Game goes on...')
    }
    
}






