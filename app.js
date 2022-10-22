const displayValue = document.getElementById('display');
displayValue.textContent = 123;

document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('display').textContent = "";
})

document.getElementById('+').addEventListener('click', add)
document.getElementById('-').addEventListener('click', subtract)
document.getElementById('*').addEventListener('click', multiply)
document.getElementById('/').addEventListener('click', divide)

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

function getFirstNumber(){
    const numberButton = document.querySelectorAll('.number');
    numberButton.forEach(number => number.addEventListener('click', () => {
    firstNumber = document.getElementById('display').textContent += number.value;
}));
};
getFirstNumber()

function getSecondNumber(){
    const numberButton = document.querySelectorAll('.number');
    numberButton.forEach(number => number.addEventListener('click', () => {
    secondNumber = document.getElementById('display').textContent += number.value;
}));
};

function getOperator(){

}
