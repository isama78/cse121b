/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let  fullName = 'Mauro Jose Isa'
let currentYear = new Date().getFullYear()
let profilePicture = 'images/WhatsApp-Image.jpeg'


/* Step 3 - Element Variables */
let nameElement = document.getElementById('name')
let foodElement = document.getElementById('food')
let yearElement = document.querySelector('#year')
let imageElement = document.querySelector('img')


/* Step 4 - Adding Content */
nameElement.append(fullName)
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentYear
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Profile image of ${fullName}`)



/* Step 5 - Array */
const foods = ['pizza','hamburger', 'salad', 'milanesa', 'melon']
foodElement.append(foods)
let food = 'lasagna'
foods.push(food)
foodElement.innerHTML += `<br>${foods}`
foods.shift()
foodElement.innerHTML += `<br>${foods}`
foods.pop()
foodElement.innerHTML += `<br>${foods}`





