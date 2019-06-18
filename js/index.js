// Your code goes here
const funBus = document.querySelector('img')
const doc = document
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

itemToZoom.onwheel = zoom

// event listener 1: Blur the funBus on mousover 
funBus.addEventListener('mouseover', event => funBus.style.filter = 'blur(4px)')

// event listener 2: Add filter and remove blur on mouseout
funBus.addEventListener('mouseout', event => funBus.style.filter = 'sepia(1)')

// event listenr 3: Change Fun Bus title to Funky Bus on load
window.addEventListener('load', event => title.innerText = 'Funky Bus')


