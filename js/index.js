// Your code goes here
const funBus = document.querySelector('img')
const doc = document
const querySelector = doc.querySelector
const title = doc.querySelector('h1')
const itemToZoom = funBus

let scale = 1

const zoom = (event) => {
  event.preventDefault()

  scale += event.deltaY * -0.01

  //restrict scale
  scale = Math.min(Math.max(.125, scale), 4)

  //apply scale transform
  itemToZoom.style.transform = `scale(${scale})`
  itemToZoom.style.filter = null
  
}

// create a sticky element to play with
let funBoxY = 100
const funBox = doc.createElement('div')
funBox.style.position = 'fixed'
funBox.style.width = '10rem'
funBox.style.height = '10rem'
funBox.style.top = `${funBoxY}`
funBox.style.right = '0'
funBox.style.backgroundColor = 'orange'

const header = doc.querySelector('header')
header.appendChild(funBox)
const funBoxContent = doc.createElement('p')
funBoxContent.style.margin = '1.5rem'
funBoxContent.style.textAlign = 'center'
funBoxContent.innerText = "Double Click Me"
funBox.appendChild(funBoxContent)



// event listener 1: Blur the funBus on mousover 
funBus.addEventListener('mouseover', () => funBus.style.filter = 'blur(0.5rem)')

// event listener 2: Add filter and remove blur on mouseout
funBus.addEventListener('mouseout', () => funBus.style.filter = 'sepia(1)')

// event listener 3: Change Fun Bus title to Funky Bus on load
window.addEventListener('load', () => {
  title.innerText = 'Funky Bus'
  title.style.color = 'purple'
  title.style.fontSize = '5em'
})

// event listener 4: zooming the Fun Bus image on wheel
funBus.addEventListener('wheel', zoom)

// event listener 5: double clicking the Fun Box
let counter = 0
funBox.addEventListener('dblclick', () => { 
  switch (counter) {
    case 0:
      count()
      funBox.style.backgroundColor = 'yellow'
      funBoxContent.innerText = 'Double-click me again'

      break;
    case 1:
      funBoxContent.innerText = 'Double-click me again'
      funBox.style.backgroundColor = 'green'
      count()
      break;
    case 2:
      counter = 0
      funBoxContent.innerText = 'Double-click me'
      funBox.style.backgroundColor = 'orange'
      break;
  }
  function count() {
    counter += 1
  } 
})