//Variables declatarion


let color = document.querySelector('color');
let rainbow = document.querySelector('rainbow');
let eraser = document.querySelector('eraser');
let clear = document.querySelector('clear');
let option1 = document.querySelector('option1');
let option2 = document.querySelector('option2');
let option3 = document.querySelector('option3');
let option4 = document.querySelector('option4');


// Create grid

function createGrid(size){

let etchScreen = document.querySelector('.etchScreen');

etchScreen.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
etchScreen.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < size * size; i++) {
  let square = document.createElement('div');
  etchScreen.appendChild(square).className = 'square';
}
}
createGrid(16);

// Hovering for color change

function colorChange(){
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => {square.addEventListener('mouseover', (e) => {square.style.backgroundColor = 'black';});
  });
} 
colorChange();

  
    





