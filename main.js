// Create grid and hovering for color change

function createGrid(size){

let etchScreen = document.querySelector('.etchScreen');

etchScreen.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
etchScreen.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < size * size; i++) {
  let square = document.createElement('div');
  etchScreen.appendChild(square).className = 'square';
}

let squares = document.querySelectorAll('.square');
squares.forEach(square => {
  square.style.backgroundColor = 'white';
});

colorSquare();
}

// Different grid sizes

let option1 = document.querySelector('.option1');
option1.addEventListener('click', (e) => {(createGrid(15))});
let option2 = document.querySelector('.option2');
option2.addEventListener('click', (e) => {(createGrid(30))});
let option3 = document.querySelector('.option3');
option3.addEventListener('click', (e) => {(createGrid(45))});
let option4 = document.querySelector('.option4');
option4.addEventListener('click', (e) => {(createGrid(60))});

 //Color on hover

 function colorSquare() {
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mouseover', (e) => {
      square.style.backgroundColor = 'black';})
  });
}

//Clear the grid

function clearGrid() {
let clear = document.querySelector('.clear');
clear.addEventListener('click', (e) => {
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = 'white';
  }
  );
})
}

clearGrid();

//Eraser

function eraser() {
  let eraser = document.querySelector('.eraser');
  eraser.addEventListener('click', (e) => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
      square.addEventListener('mouseover', (e) => {
        square.style.backgroundColor = 'white';})
    })}
    );
  }

  eraser();

 // Rainbow mode

 function rainbowMode() {
   let rainbow = document.querySelector('.rainbow');
   rainbow.addEventListener('click', (e) => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
    square.addEventListener('mouseover', (e) => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    })
   })
 })}

rainbowMode();

function defaultMode() {
  let black = document.querySelector('.black');
  black.addEventListener('click', (e) => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
      square.addEventListener('mouseover', (e) => {
        square.style.backgroundColor = 'black';
      })
    })
    })
  }

  defaultMode();


    





