const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

let image = document.createElement('img')
image.setAttribute('src', 'https://placeimg.com/200/200/animals')
document.body.appendChild(image)

const newSection = document.createElement('section')
const newH2 = document.createElement('h2')
newH2.innerText = 'CSE 121b' 
newSection.append(newH2)
const newP = document.createElement('p')
newP.innerText = 'Welcome to Javascript Language'
newH2.append(newP)
document.body.appendChild(newSection)

