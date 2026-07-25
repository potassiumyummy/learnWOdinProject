/**
 * Rock Paper Scissors Game
 * Sets up an event-driven UI for a 5-round game against the computer.
 */

const container = document.body;

// --- 1. Game State Setup ---
let currentRound = 1;
const maxRounds = 5;

// --- 2. UI Initialization ---
// Title
const title = document.createElement("h1");
title.textContent = "Rock Paper Scissors";
container.appendChild(title);

// Input field for the user
const userField = document.createElement("input");
userField.type = "text";
userField.placeholder = "Enter rock, paper, or scissor";
container.appendChild(userField);

// Button to submit the choice and play a round
const playBtn = document.createElement("button");
playBtn.textContent = "Play Round";
container.appendChild(playBtn);

// A container to display the results of each round
const resultsContainer = document.createElement("div");
container.appendChild(resultsContainer);

// --- 3. Game Functions ---

/**
 * Generates a random choice for the computer.
 * @returns {string} "rock", "paper", or "scissor"
 */
const getComputerChoice = () => {
    // Math.random() generates a number between 0 and 0.999. 
    // Multiplying by 3 and flooring gives us 0, 1, or 2.
    let computer = Math.floor(Math.random() * 3);
    switch(computer){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    }
};

/**
 * Reads, formats, and validates the user's input.
 * @returns {string|null} The valid choice, or null if input is invalid.
 */
const getHumanChoice = () => {
    // Correctly read from the input's .value property
    let user = userField.value.trim().toLowerCase();

    if (user === "") {
        alert("Please enter an answer in the input box!");
        return null; // Return null so the round doesn't proceed
    }

    if (["rock", "paper", "scissor"].includes(user)) {
        return user;
    } else {
        alert("Invalid choice. Please type rock, paper, or scissor.");
        return null;
    }
};

// --- 4. Event Listener (Game Loop Replacement) ---

/**
 * Instead of a for-loop, we use an event listener. 
 * Every time the button is clicked, one round is played.
 */
playBtn.onclick = () => {
    // Stop the game if we've passed the max rounds
    if (currentRound > maxRounds) {
        return; 
    }

    // 1. Get user selection
    const humanSelection = getHumanChoice();
    if (!humanSelection) return; // Exit early if input was blank or invalid

    // 2. Get computer selection
    const computerSelection = getComputerChoice();

    // 3. Display the results for this round
    const roundDisplay = document.createElement("p");
    roundDisplay.textContent = `Round ${currentRound}: You chose ${humanSelection}, Computer chose ${computerSelection}.`;
    resultsContainer.appendChild(roundDisplay);

    // 4. Clean up for the next round
    userField.value = ""; // Clear the input box
    currentRound++;       // Increment the round tracker

    // 5. Check for game over
    if (currentRound > maxRounds) {
        const gameOverText = document.createElement("h2");
        gameOverText.textContent = "Game Over! Refresh the page to play again.";
        resultsContainer.appendChild(gameOverText);
        
        // Disable the input and button so the user can't keep playing
        playBtn.disabled = true;
        userField.disabled = true;
    }
};