/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2
}

function addNumbers() {
    let num1 = Number(document.querySelector('#add1').value)
    let num2 = Number(document.querySelector('#add2').value)
    document.querySelector('#sum').value = add(num1, num2)
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */
const substract = function(number1, number2){
    return number1 - number2
}

const substractNumbers = function() {
    let num1 = Number(document.querySelector('#subtract1').value)
    let num2 = Number(document.querySelector('#subtract2').value)
    document.querySelector('#difference').value = substract(num1, num2)
}

document.querySelector('#subtractNumbers').addEventListener('click', substractNumbers)

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2)=> number1 * number2
const multiplyNumbers = () => {
    let num1 = Number(document.querySelector('#factor1').value)
    let num2 = Number(document.querySelector('#factor2').value)
    document.querySelector('#product').value = multiply(num1, num2)
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2
}

const divideNumbers = function() {
    let num1 = Number(document.querySelector('#dividend').value)
    let num2 = Number(document.querySelector('#divisor').value)
    document.querySelector('#quotient').value = divide(num1, num2)
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)

/* Decision Structure */
let today = new Date()
let year = today.getFullYear()
document.querySelector('#year').innerHTML = year

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]
document.querySelector('#array').innerHTML = numbers
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbers.filter(number => number % 2 === 0)
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbers.filter(number => number % 2 !== 0)
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbers.reduce((acc, number) => acc + number)
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbers.map(number => number * 2)
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbers.map(number => number * 2).reduce((acc, number) => acc + number)