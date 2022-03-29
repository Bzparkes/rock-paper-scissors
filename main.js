// console.log('Hello World')

function computerPlay(gameWord) {
    return gameWord[Math.floor(Math.random()*gameWord.length)];
}

const gameWord = ['Rock', 'Paper', 'Scissors'];
//console.log(computerPlay(gameWord));

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === computerSelection) {
    return 'It\'s a draw!';
}   else if(computerSelection === 'Scissors') {
    return 'You win!'; 
}   else {
    return 'You lose!'
}  
}

const playerSelection = 'Rock';
const computerSelection = computerPlay(gameWord);
//console.log(playRound(playerSelection, computerSelection));

function game(playRound) {
   if 
 
console.log(game)