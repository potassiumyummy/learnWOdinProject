const container = document.body;

let currentRound = 1;
const maxRounds = 5;

const title = document.createElement("h1");
title.textContent = "Rock Paper Scissors";
container.appendChild(title);

const userField = document.createElement("input");
userField.type = "text";
userField.placeholder = "Enter rock, paper, or scissor";
container.appendChild(userField);

const playBtn = document.createElement("button");
playBtn.textContent = "Play Round";
container.appendChild(playBtn);

const resultsContainer = document.createElement("div");
container.appendChild(resultsContainer);

const getComputerChoice = () => {
    let computer = Math.floor(Math.random() * 3);
    switch(computer){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    }
};

const getHumanChoice = () => {
    let user = userField.value.trim().toLowerCase();

    if (user === "") {
        alert("Please enter an answer in the input box!");
        return null;
    }

    if (["rock", "paper", "scissor"].includes(user)) {
        return user;
    } else {
        alert("Invalid choice. Please type rock, paper, or scissor.");
        return null;
    }
};

playBtn.onclick = () => {
    if (currentRound > maxRounds) {
        return; 
    }

    const humanSelection = getHumanChoice();
    if (!humanSelection) return; 

    const computerSelection = getComputerChoice();

    const roundDisplay = document.createElement("p");
    roundDisplay.textContent = `Round ${currentRound}: You chose ${humanSelection}, Computer chose ${computerSelection}.`;
    resultsContainer.appendChild(roundDisplay);

    userField.value = "";
    currentRound++;

    if (currentRound > maxRounds) {
        const gameOverText = document.createElement("h2");
        gameOverText.textContent = "Game Over! Refresh the page to play again.";
        resultsContainer.appendChild(gameOverText);
        
        playBtn.disabled = true;
        userField.disabled = true;
    }
};