/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Mauro Jose Isa",
    photo: "images/whatsApp-image.jpeg",
    favoriteFoods: ['pizza','hamburger', 'salad', 'milanesa', 'melon'],
    hobbies: ["read", "travel", "coding", "movies"],
    placesLived: []
}


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: "Pergamino, Bs. As",
    length: "30 years"
})

myProfile.placesLived.push({
    place: "Santiago, Chile",
    length: "2 years"
})

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').innerHTML = myProfile.name
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo
document.querySelector('#photo').alt = myProfile.name

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let item = document.createElement('li')
    item.textContent = food
    document.querySelector('#favorite-foods').append(item)
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let item = document.createElement('li')
    item.textContent = hobby
    document.querySelector('#hobbies').append(item)
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt')
    dt.textContent = place.place
    let dd = document.createElement('dd')
    dd.textContent = place.length
    document.querySelector('#places-lived').append(dt, dd) 
})

