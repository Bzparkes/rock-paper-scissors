const choices = ["rock", "paper", "scissors"];

function game() {
    playRound();
}

function playRound() {
   const playerSelection = playerChoice();
   const computerSelection = computerChoice();
}

function playerChoice() {
    let input = prompt('Type Rock, Paper, or Scissors');
    while(input == null) {
        input = prompt("Type Rock, Paper, or Scissors")
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while(check == false) {
       input = prompt(
           "Type Rock, Paper, or Scissors. Spelling needs to be exact but capitalisation doesn't matter"
        );
        input = input.toLowerCase();
        check = validateInput(input);
    }
    //console.log(input);
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice) {
    if(choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

function checkWinner(choiceP, choiceC) {
    if(choiceP === choiceC) {
        return "Tie";
    } else if(
        (choiceP === "rock" && choiceC === "scissors") || 
        (choiceP === "paper" && choiceC === "rock") || 
        (choiceP === "scissors" && choiceC === "paper")
    ) {
      return "Player wins!";
    } else{
        return "Computer wins!";
    }
}

game();









//console.log(computerChoice())


