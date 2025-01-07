document.addEventListener("DOMContentLoaded", () => {

//default values
let setting = "color"


//buttons/container

const container = document.querySelector("#container")
const colorBtn = document.querySelector("#color-btn");
const randomBtn = document.querySelector("#random-btn");
const darkeningBtn = document.querySelector("#darkening-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const resetBtn = document.querySelector("#reset-btn");
const gridSizeBtn = document.querySelector("#gridSize-btn");

//create the grid

function createGrid(size){
    container.innerHTML = "";
    const gridSquareSize = parseFloat(window.getComputedStyle(container).width) / size;
    for ( let i = 0; i < size*size; i++){
        const gridSquare = document.createElement("div")
        gridSquare.classList.add("grid-square")
        gridSquare.style.height = `${gridSquareSize}px`
        gridSquare.style.width = `${gridSquareSize}px`
        gridSquare.style.backgroundColor= "white"
        
    gridSquare.addEventListener("mouseover", () =>{
        changeColor(gridSquare)
    })

    container.appendChild(gridSquare)
    }

    
}

// button event listeners
colorBtn.addEventListener("click", () => {
    setting = "color"
})
randomBtn.addEventListener("click", () => {
    setting = "random"
})
darkeningBtn.addEventListener("click", () => {
    setting = "darkening"
})
eraserBtn.addEventListener("click", () => {
    setting = "eraser"
})
resetBtn.addEventListener("click", () => {
    createGrid(16)
})
gridSizeBtn.addEventListener("click", () => {
    const newSize = parseInt(prompt("Enter a new grid size between 4 & 64: "));
    createGrid(newSize)
})

//functions for buttons
function changeColor(gridSquare){
    switch(setting){
        case "color":
            gridSquare.style.backgroundColor = "grey";
            break
        case "random":
            gridSquare.style.backgroundColor = randomColor()
            break
        case "darkening":
            gridSquare.style.backgroundColor = darkenColor(gridSquare)
            break
        case "eraser":
            gridSquare.style.backgroundColor = "white";
            break
    }
}

function randomColor(){
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function darkenColor(gridSquare){
    const currentColor = window.getComputedStyle(gridSquare).backgroundColor;
    const [r, g, b] = currentColor.match(/\d+/g).map(Number);
    const darkenedColor = `rgb(${Math.max(r - 25, 0)}, ${Math.max(g - 25, 0)}, ${Math.max(b - 25, 0)})`;
    return darkenedColor;
}

//initialize etch a sketch

createGrid(16)


})