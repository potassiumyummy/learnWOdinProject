const container = document.querySelector(".container");
const display = document.querySelector("#display");

let firstValue = null;
let operator = null;
let currentNumber = "";
let justCalculated = false;

function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1/num2;
}

const operate = (num1, num2, operator) => {
    switch(operator){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            return NaN;
    }
};

function makeButton(label, className, onClick) {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.classList.add("key");
    btn.classList.add(className);
    btn.addEventListener("click", onClick);
    return btn;
}

function updateDisplay(message) {
    display.textContent = message;
}

function calculateAndStore() {
    if (operator !== null && currentNumber !== "") {
        const result = operate(Number(firstValue), Number(currentNumber), operator);
        if (Number.isNaN(result)) {
            updateDisplay("NaN - invalid input or operator");
        } else if (result === Infinity || result === -Infinity) {
            updateDisplay("Cannot divide by zero");
        } else {
            let rounded = Math.round(result * 100) / 100;
            if (rounded === 0) rounded = 0;
            updateDisplay(rounded);
            firstValue = rounded;
            currentNumber = "";
        }
    }
}

function digitPressed(digit) {
    if (justCalculated) {
        currentNumber = "";
        justCalculated = false;
    }
    if (digit === "." && currentNumber.includes(".")) {
        return;
    }
    currentNumber += digit;
    updateDisplay(currentNumber);
}

function operatorPressed(op) {
    if (currentNumber !== "") {
        if (firstValue === null) {
            firstValue = Number(currentNumber);
        } else {
            calculateAndStore();
        }
    }
    operator = op;
    currentNumber = "";
    justCalculated = false;
}

function equalsPressed() {
    if (firstValue !== null && operator !== null && currentNumber !== "") {
        const result = operate(Number(firstValue), Number(currentNumber), operator);
        if (Number.isNaN(result)) {
            updateDisplay("NaN - invalid input or operator");
        } else if (result === Infinity || result === -Infinity) {
            updateDisplay("Cannot divide by zero");
        } else {
            let rounded = Math.round(result * 100) / 100;
            if (rounded === 0) rounded = 0;
            updateDisplay(rounded);
            firstValue = rounded;
            currentNumber = "";
            justCalculated = true;
            operator = null;
        }
    }
}

function clearPressed() {
    firstValue = null;
    operator = null;
    currentNumber = "";
    justCalculated = false;
    updateDisplay("");
}

const calculator = document.createElement("div");
calculator.classList.add("calculator");

const digits = document.createElement("div");
digits.classList.add("digits");
for (let i = 1; i <= 9; i++) {
    digits.appendChild(makeButton(String(i), "digit", () => digitPressed(String(i))));
}

const operators = document.createElement("div");
operators.classList.add("operators");
operators.appendChild(makeButton("+", "operator", () => operatorPressed("+")));
operators.appendChild(makeButton("-", "operator", () => operatorPressed("-")));
operators.appendChild(makeButton("\u00D7", "operator", () => operatorPressed("*")));
operators.appendChild(makeButton("\u00F7", "operator", () => operatorPressed("/")));

const actions = document.createElement("div");
actions.classList.add("actions");
actions.appendChild(makeButton("0", "digit", () => digitPressed("0")));
actions.appendChild(makeButton(".", "digit", () => digitPressed(".")));
actions.appendChild(makeButton("=", "equals", () => equalsPressed()));
actions.appendChild(makeButton("C", "clear", () => clearPressed()));

calculator.appendChild(digits);
calculator.appendChild(operators);
calculator.appendChild(actions);
container.appendChild(calculator);