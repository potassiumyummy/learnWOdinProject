function add7(num){
    num = num + 7;
    return num
}

console.log(add7(10));

function multiply(num1, num2){
    return num1 * num2;
}

console.log(multiply(3,2));

function capitalize(word){
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalized;
}

console.log(capitalize("mommy"));

function lastletter(text){
    return text.at(-1);
}

console.log(lastletter("NeilAndrie"));