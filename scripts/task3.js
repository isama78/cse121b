/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// function add(number1, number2) {

// }

// Step 2: In the function, return the sum of the parameters number1 and number2

function add(number1, number2) {
    return parseInt(number1) + parseInt(number2)
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

function addNumbers() {
    const num1 = document.getElementById('addend1').value
    const num2 = document.getElementById('addend2').value
    const sum = add(num1, num2)
    return sum
}

// Step 4: Assign the return value to an HTML form element with an ID of sum

function addNumbers() {
    const num1 = document.getElementById('addend1').value
    const num2 = document.getElementById('addend2').value
    const sum = add(num1, num2)
    document.getElementById('sum').value = sum
}


// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById('addNumbers').addEventListener('click', () => addNumbers())



// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const substract = function(number1, number2) {
    return number1 - number2
}

const substractNumbers = function(id1, id2) {
    const num1 = document.getElementById(id1).value
    const num2 = document.getElementById(id2).value
    const difference = substract(num1, num2)
    const diffContainer = document.getElementById('difference').value = difference
}

document.getElementById('subtractNumbers').addEventListener('click', () => substractNumbers('minuend', 'subtrahend'))

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number1, number2) => number1 * number2

const multiplyNumbers = (id1, id2) => {
    const num1 = document.getElementById(id1).value
    const num2 = document.getElementById(id2).value
    const product = multiply(num1, num2)
    const productContainer = document.getElementById('product').value = product
}

const multiplyButton = document.getElementById('multiplyNumbers')
multiplyButton.addEventListener('click', () => multiplyNumbers('factor1', 'factor2'))

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = (number1, number2) => number1 / number2

const divideNumbers = (id1, id2) => {
    const num1 = document.getElementById(id1).value
    const num2 = document.getElementById(id2).value
    const quotient = divide(num1, num2)
    const quotientContainer = document.getElementById('quotient').value = quotient
}

const divideButton = document.getElementById('divideNumbers')
divideButton.addEventListener('click', () => divideNumbers('dividend', 'divisor'))

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let currentDate = new Date()

// Step 2: Declare a variable to hold the current year
let currentYear

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear()

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById('year').innerHTML = currentYear

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById('array').innerHTML = numbersArray

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.getElementById('odds').innerHTML = numbersArray.filter(num => num % 2 !== 0)

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.getElementById('evens').innerHTML = numbersArray.filter(num => num % 2 === 0)

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.getElementById('sumOfArray').innerHTML = numbersArray.reduce((total, num) => total + num)

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.getElementById('multiplied').innerHTML = numbersArray.map(num => num * 2)

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.getElementById('sumOfMultiplied').innerHTML = numbersArray.map(num => num * 2).reduce((total, num) => total + num)
