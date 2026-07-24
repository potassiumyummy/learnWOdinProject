const container = document.body;

const userComputerContainer = document.createElement("div");
container.appendChild(userComputerContainer);

const computerbtn = document.createElement(`button`);
computerbtn.textContent = "Generate Computer Choice";

const userInput = document.createElement(`input`);

const playGamebtn = document.createElement(`button`);
playGamebtn.textContent = "Play Game";

const computerChoiceField = document.createElement(`p`);
userComputerContainer.appendChild(computerbtn);
userComputerContainer.appendChild(userInput);
userComputerContainer.appendChild(playGamebtn);
userComputerContainer.appendChild(computerChoiceField);


let humanScore = 0;
let computerScore = 0;


const getComputerChoice = () => {
    let computer = Math.floor(Math.random()*3);
    switch(computer){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
    }
};

computerbtn.onclick = () => {
    computerChoiceField.textContent = getComputerChoice();
};
 
const HumanChoice = () => {
    let user = prompt("Choose your fighter: ", "rock, paper, or scissor");

    if(user === null){
        return "Idiot you didn't put any answer in the input box! This nigga really getting into my nerve!";
    }

    user = user.toLowerCase();

    switch(user){
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissor":
            return "scissor";
        default:
            return "invalid";
    }
}



function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log(`Human: ${humanChoice} || Computer: ${computerChoice}`);
        return "It's a fucking Tie!";
    }else if((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")){
        humanScore++;
        console.log(`Human: ${humanChoice} || Computer: ${computerChoice}`);
        return "The retarded human won!";
    }else if(humanChoice === "invalid"){
        return "This dumbass can't even pick a right answer!";
    }else{
        computerScore++;
        console.log(`Human: ${humanChoice} || Computer: ${computerChoice}`);
        return "Computer defeated the dumbass stupid no-future good for nothing trash human!!!🎉🎉🎉";
    }
}


const playGame = () => {
    for(let i = 0; i < 5; i++){
        console.log(`Round: ${i + 1}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
    }
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Human Score: ${humanScore}`);
    if(computerScore > humanScore){
        console.log(`WTF THE COMPUTER JUST DEFEATED YOU, YOU FUCKING TRASH!`)
    }else if(computerScore < humanScore){
        console.log(`Be humble you filthy creature.`);
    }else{
        return `Wow the human tied the score with the computer!`;
    }
};

playGame();