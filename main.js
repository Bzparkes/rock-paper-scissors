//console.log('Hello World')


// This is the function which determines the computer's guess
function computerPlay() {
    const answers = ['Rock', 'Paper', 'Scissors'];
    const random =  answers[Math.floor(Math.random()*answers.length)];
    alert(`The computer has chosen: ${random}`);
    }
    
//computerPlay()

// if (playerSelection == 'rock' && computerSelection == 'rock') {
//     return 'It\'s a tie!';
// } else if (playerSelection == 'rock' && computerSelection == 'paper') {
//     return 'You lose!';
// } else {
//     return 'You need to answer the question...';
// }
let rock ='Rock';
let paper = 'Paper';
let scissors = 'Scissors';

function playRound(playerSelection, computerSelection) {
    //playerSelection = prompt('What is your choice?').toLowerCase();
    if(playerSelection === 'rock' && computerSelection === 'Scissors') {
    return 'You win!';
    } else if(playerSelection < computerSelection){
        return 'You lose!';
    } else {
        return 'It\'s a tie...';
    }
}


//prompt('Rock, paper or scissors?').toLowerCase;
const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));