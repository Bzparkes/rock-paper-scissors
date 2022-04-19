//console.log('Hello World')
const answers = ['Rock', 'Paper', 'Scissors'];
const random =  answers[Math.floor(Math.random()*answers.length)];
const playerSelection = 'rock';
const computerSelection = random;

function playGame() {
    playRound();
    gameScore();
}

function playRound(playerSelection, computerSelection) {
    return playerSelection;
    return computerSelection;
}
    


//prompt('Rock, paper or scissors?').toLowerCase;

console.log(playRound(playerSelection, computerSelection));

