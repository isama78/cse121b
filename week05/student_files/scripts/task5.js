/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let today = new Date()
// Step 2: Declare another variable to hold the day of the week
let day
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
day = today.getDay()
// Step 4: Declare a variable to hold a message that will be displayed
let message
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (day > 0 & day <= 4) {
    message = 'Hang in there!'
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if (day > 0 & day <= 4) {
    message = 'Hang in there!'
} else {
    message = 'Woohoo!  It is the weekend!'
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (day) {
    case 0:
        message2 = 'sunday'
        break
    case 1:
        message2 = 'monday'
        break
    case 2:
        message2 = 'tuesday'
        break
    case 3:
        message2 = 'wednesday'
        break
    case 4:
        message2 = 'thursday'
        break
    case 5:
        message2 = 'friday'
        break
    case 6:
        message2 = 'saturday'
        break

    default:
        break;
}


/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById('message1').innerHTML = message
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById('message2').innerHTML = message2

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let temples = []
let filteredTemples = []
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
const output = (templesList) => {
    templesList.forEach(temple => {
        const articuleElement = document.createElement('articule')
        const tName = document.createElement('h3').innerHTML = temple.templeName
        const tLocation = document.createElement('h4').innerHTML = temple.location
        const tDedicated = document.createElement('h4').innerHTML = temple.dedicated
        let tImage = document.createElement('img')
        tImage.src = temple.imageUrl
        tImage.alt = temple.templeName
        articuleElement.append(tName, tLocation, tDedicated, tImage)
        document.getElementById('temples').append(articuleElement)
    });
    
}

// Step 3: Create another function called getTemples. Make it an async function.
//const getTemples = async () => {}

// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// const getTemples = async () => {
//     const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
//     const response = await fetch(url)
// }

// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// const getTemples = async () => {
//     const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
//     const response = await fetch(url)
//     const data = await response.json()
//     temples = [...data]
// }

// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
const getTemples = async () => {
    const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
    const response = await fetch(url)
    const data = await response.json()
    temples = [...data]
    output(temples)
}

getTemples()


// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
const reset = () => {
    const parent = document.getElementById('temples')
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
}
// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

const sortBy = (sortSelection) => {
    reset()
    if(sortSelection === 'templeNameAscending') {
        console.log(`My sort selection is: ${sortSelection}`)
        const sortedTemples = temples.sort((a, b) => {
            if(a.templeName > b.templeName) {
                return 1
            }
            else if(a.templeName < b.templeName){
                return -1
            }
            else {return 0}
        })
        console.log(sortedTemples)
        output(sortedTemples)
    }
    else if(sortSelection === 'templeNameDescending') {
        console.log(`My other sort selection is: ${sortSelection}`)
        const sortedTemples = temples.sort((a, b) => {
            if(a.templeName < b.templeName) {
                return 1
            }
            else if(a.templeName > b.templeName){
                return -1
            }
            else {return 0}
        })
        console.log(sortedTemples)
        output(sortedTemples)
    }
    
    
}

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
/* STRETCH */
document.getElementById('sortBy').addEventListener('change', (e) => {
    
    sortBy(e.target.value)
})


// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files

document.getElementById('filter').addEventListener('change', (e) => {
    e.preventDefault()
    reset()
    const templesFiltered = temples.filter(temple => temple.templeName.toLowerCase().includes(e.target.value.toLowerCase()))
    filteredTemples = [...templesFiltered]
    output(filteredTemples)
})
