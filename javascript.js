document.addEventListener("DOMContentLoaded", () => {

//default values
//create the grid

function createGrid(size){
    container.innerHTML = "";
    const gridSquareSize = 500 / size;
    for ( let i = 0; i < size*size; i++){
        const gridSquare = document.createElement("div")
        gridSquare.classList.add("grid-square")
        gridSquare.style.height = `${gridSquareSize}px`
        gridSquare.style.width = `${gridSquareSize}px`
        gridSquare.style.backgroundColor= "white"
        container.appendChild(gridSquare)
    }

    
}



//add buttons/container, button event listeners

const container = document.querySelector("#container")
const colorBtn = document.querySelector("#color-btn");
const randomBtn = document.querySelector("#random-btn");
const darkeningBtn = document.querySelector("#darkening-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const resetBtn = document.querySelector("#reset-btn");
const gridSizeBtn = document.querySelector("#gridSize-btn");

colorBtn.addEventListener("click", () => {
    alert("Hello I'm the color button");
})
randomBtn.addEventListener("click", () => {
    alert("Hello I'm the random button");
})
darkeningBtn.addEventListener("click", () => {
    alert("Hello I'm the darkening button");
})
eraserBtn.addEventListener("click", () => {
    alert("Hello I'm the eraser button");
})
resetBtn.addEventListener("click", () => {
    alert("Hello I'm the reset button");
})
gridSizeBtn.addEventListener("click", () => {
    alert("Hello I'm the grid size button");
})

//functions for buttons
//initialize etch a sketch

createGrid(4)


})