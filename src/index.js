// const someData = ['foo', 'bar','baz', 'fizz']// this is raw data from the data server

// someData.forEach(str => {
//   const div = divMaker(str, 'grey')
//   document.body.prepend(div)
// })

// function divMaker(text, color) { //COMPONENT takes raw data, returns DOM element(s)
//   const theNewDiv = document.createElement('div') //instantiation
//   theNewDiv.classList.add('nice-div') //adding attributes
//   theNewDiv.textContent = text //adding text
//   theNewDiv.style.color = color //adding inline styles
//   return theNewDiv //return
// }

// const div = divMaker('lambda', 'red')
// const div2 = divMaker('web 36', 'green')
// document.body.prepend(div)
// document.body.prepend(div2)

//insertAdjecentHTML

// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg' },
]

function makeImg ({ imageURL }) {
  //create element
  const image = document.createElement('img');
  image.src = imageURL;
  image.style.height = '10em';
  return image;
}


// imageData.forEach(img => {
//   const imageElem = makeImg(img);
//   document.body.prepend(imageElem);
// })




// // function imageCreator(imageURL) {
// //   let img = document.createElement('img')
// //   img.src = imageURL
// //   return img
// // }

// function imageCreator(imageURL) {
//   const newImage = document.createElement('img')
//   newImage.setAttribute('src', imageURL)
//   return newImage
// }

// let images = imageData.map((image) => {
//   let img = imageCreator(image.imageURL)
//   return img
// })

// let secondary = document.querySelector('.secondary')
// images.forEach((img) => {
//   secondary.prepend(img)
// })

// TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants
import panelData from './data/panelData'
import constants from './data/constants'
import linkData from './data/linkData'
console.log(constants)
// console.log(panelData)

const open = constants.open
const close = constants.close

//const { open, close } = constants ////called destructuring

// TASK 2- Verify our imports using log statements
console.log(panelData) // log the panelData
console.log(open) // log the open arrow
console.log(linkData) // log the close arrow


// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.
const accordion = document.querySelector('.accordion')
console.log(accordion)


// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel({ title, content }) {


  // TASK 5- Instantiate all the elements needed for a panel
  const panel = document.createElement('div')
  const panelBar = document.createElement('div')
  const panelContent = document.createElement('div')
  const panelTitle = document.createElement('h3')
  const panelButtons = document.createElement('div')
  const openButton = document.createElement('button')
  const closeButton = document.createElement('button')


  // TASK 6- Setup the structure of our elements
  /*
    <div>                   // panel
      <div>                 // panelBar
        <h3></h3>           // panelTitle
        <div>               // panelButtons 
          <button></button> // openButton
          <button></button> // closeButton
        </div>
      </div>
      <div></div>           // panelContent
    </div>
  */
  panel.appendChild(panelBar)
  panel.appendChild(panelContent)
  panelBar.appendChild(panelTitle)
  panelBar.appendChild(panelButtons)
  panelButtons.appendChild(openButton)
  panelButtons.appendChild(closeButton)

  // TASK 7- Add proper class names to our elements (See index.html for reference)
  // paying attention to the elements that need to start out hidden

  panel.classList.add('panel')
  panelBar.classList.add('panel-bar')
  panelButtons.classList.add('panel-buttons')
  openButton.classList.add('panel-btn-open')
  closeButton.classList.add('panel-btn-close', 'hide-btn')
  panelContent.classList.add('panel-content')



  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file

  panelTitle.textContent = title;
  panelContent.textContent = content;
  openButton.textContent = open;
  closeButton.textContent = close;


  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)
  panelButtons.addEventListener('click', () => {
    openButton.classList.toggle('hide-btn')
    closeButton.classList.toggle('hide-btn')
    panelContent.classList.toggle('toggle-on')
  })

  // don't forget to return the panel!
  return panel
}

console.log(makePanel('the title', 'the content'))

// TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.

//First Way
//Map returns a NEW array, it dfoes NOT modify the og array
const panelElements= panelData.map(panel => {
  return makePanel(panel)
})

console.log(panelElements)

panelElements.forEach(panel => {
  accordion.appendChild(panel)
})



//Second Way
// panelData.forEach(objectPanel => {
//   // const { title, content } = objectPanel
//   const panel = makePanel(objectPanel.title, objectPanel.content)
//   accordion.appendChild(panel)
// })

// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.

function linkMaker({ href, className, text }) {
  //step 1: create the element
  const link = document.createElement('a')
  //step 2: add data
  link.textContent = text;
  //step 3: add className for styling
  link.className = className;
  //step 4: add any assocaited functionaliy
  link.href = href;
  //step 5: NEVER FORGET TO RETURN
  return link
}

linkData.forEach(link => {
  const linkElem = linkMaker(link);
  document.querySelector('nav').appendChild(linkElem)
})



/*
          <a href="#" class="nav-item">Home</a>
          <a href="#" class="nav-item">About</a>
          <a href="#" class="nav-item">Blog</a>
          <a href="#" class="nav-item">Contact</a> 
*/

