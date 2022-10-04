/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let aboutMe = {}

// Step 2: Inside of the object, add a property named name with a value of your name as a string
aboutMe.name = 'Mauro'

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
aboutMe.imgPath = '../images/whatsapp-image.jpeg'

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
aboutMe.favoriteFoods = ['pizza', 'milanesas', 'salad', 'empanadas', 'asado']

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
aboutMe.hobbies = ['movies', 'travel', 'video games', 'children']

// Step 6: Add another property named placesLived with a value of an empty array
aboutMe.placesLived = []

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
aboutMe.placesLived.push(
    {
        place: '',
        length: ''
    }
)

// Step 8: For each property, add appropriate values as strings
aboutMe.placesLived[0].place = 'Pergamino city'
aboutMe.placesLived[0].length = '2950 km²'

// Step 9: Add additional objects with the same properties for each place you've lived
aboutMe.placesLived.push(
    {
        place: '',
        length: ''
    }
)

aboutMe.placesLived[1].place = 'Córdoba city'
aboutMe.placesLived[1].length = '576 km²'


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById('name').innerHTML = aboutMe.name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').src = aboutMe.imgPath 

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').alt = 'Mauro Isa´s photo'

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const foodLis = aboutMe.favoriteFoods.map(food => {
    const item = document.createElement('li')
    item.innerHTML = food
    return item
})

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.getElementById('favorite-foods').append(...foodLis)

// Step 6: Repeat Step 4 for each hobby in the hobbies property
const hobbiesLis = aboutMe.hobbies.map(hobbie => {
    const item = document.createElement('li')
    item.innerHTML = hobbie
    return item
})

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.getElementById('hobbies').append(...hobbiesLis)

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
const places = aboutMe.placesLived.map(place => {
    const dtTag = document.createElement('dt')
    dtTag.innerHTML = place.place
    return dtTag
})

const lengths = aboutMe.placesLived.map(place => {
    const ddTag = document.createElement('dd')
    ddTag.innerHTML = place.length
    return ddTag
})

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
for(i = 0; i < aboutMe.placesLived.length; i++) {
    document.getElementById('places-lived').append(places[i])
    document.getElementById('places-lived').append(lengths[i])
    console.log(document.getElementById('places-lived'))
    console.log(places[i])
    console.log(lengths[i])
}



