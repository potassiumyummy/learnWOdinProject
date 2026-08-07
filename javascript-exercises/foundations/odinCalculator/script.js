const container = document.querySelector(".container");

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
            break;
    }
};

let num1 = Number(prompt("Insert Num1"));
let num2 = Number(prompt("Insert Num2", ));
let operator = prompt("Operation", );
console.log(operate(num1, num2, operator));