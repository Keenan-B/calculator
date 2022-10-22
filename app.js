const display = document.getElementById('display');
display.textContent = "";

const prevDisplay = document.getElementById('prevDisplay');
prevDisplay.textContent = "";

const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');

let currentOperator = null;
firstNumber = ""
secondNumber = ""


document.getElementById('clear').addEventListener('click', clear)
document.getElementById('backspace').addEventListener('click', backspace)

document.getElementById('+').addEventListener('click', add)
document.getElementById('-').addEventListener('click', subtract)
document.getElementById('*').addEventListener('click', multiply)
document.getElementById('/').addEventListener('click', divide)
document.getElementById('=').addEventListener('click', evaluate)
document.getElementById('point').addEventListener('click', () => {
    if(display.textContent.includes('.')) return;
    display.textContent += "."
});




numberButton.forEach(number => number.addEventListener('click', () => 
    display.textContent += number.value
));

operatorButton.forEach(button => button.addEventListener('click', () =>
    setOperator(button.textContent)
));

function clear() {
    display.textContent = "";
    prevDisplay.textContent = "";
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
}

function backspace(){
    display.textContent = display.textContent
        .toString()
        .slice(0, -1)
}

function setOperator(operator){
    if (currentOperator !== null) evaluate();
    firstNumber = display.textContent;
    display.textContent = "";
    currentOperator = operator;
    prevDisplay.textContent = `${firstNumber} ${currentOperator}`

}

function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

function operate(a, b, operator){
    a = Number(a)
    b = Number(b)
    switch (operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}

function evaluate(){
    if (currentOperator === null) return;
    if (currentOperator === "/" && display.textContent === '0') {
        alert("You cannot divide by 0!")
        return;
    }
    if (currentOperator === "/" && display.textContent === '') {
        alert("You cannot divide by 0!")
        return;
    }
    secondNumber = display.textContent;
    display.textContent = roundNumber(operate(firstNumber, secondNumber, currentOperator));
    prevDisplay.textContent = `${firstNumber} ${currentOperator} ${secondNumber}`
    currentOperator = null
}

function roundNumber(number){
    return Math.round(number * 1000) / 1000
}
