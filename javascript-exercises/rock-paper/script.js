function getComputerChoice(){
    let computer = Math.floor(Math.random()*3);
    switch(computer){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

function getHumanChoice(){
    let user = prompt("Choose your fighter: ", "rock, paper, or scissor");

    user = user.toLowerCase();

    switch(user){
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissor":
            return "scissor";
        default:
            return "Invalid";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "It's a fucking Tie!";
    }else if((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")){
        humanScore++;
        console.log(`Human: ${humanChoice} || Computer: ${computerChoice}`);
        return "The retarded human won!";
    }else{
        computerScore++;
        console.log(`Human: ${humanChoice} || Computer: ${computerChoice}`);
        return "Computer defeated the dumbass stupid no-future good for nothing trash human!!!🎉🎉🎉";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(`Human Score: ${humanScore} || Computer Score: ${computerScore}`);