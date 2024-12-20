//first select the element

const arr = [
    "The only way to do great work is to love what you do.",
    "In three words I can sum up everything I've learned about life: It goes on.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only person you are destined to become is the person you decide to be.",
    "The only thing we have to fear is fear itself.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The measure of intelligence is the ability to change.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The only way to do great work is to love what you do."
];


const element = document.querySelector('.show')
element.innerHTML = ' Welcome Gaurav quotes generator'
function random_generate(){
// element.innerHTML = 'helo'
//first you to create the random number for the index access randomly

let result = Math.floor(Math.random()*arr.length)
element.innerHTML = arr[result]

}

setInterval(random_generate,3000)

//seelctin of the body

const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
    "black"
  ];


function showing_colors(){
  
let result = Math.floor(Math.random()*colors.length)
document.body.style.backgroundColor = colors[result]

document.body.style.transitionProperty = 'all'

document.body.style.transitionDuration = '3s'

}


setInterval(showing_colors,2500)


