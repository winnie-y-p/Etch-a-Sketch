const grid = document.querySelector(".grid");
const generateBtn = document.querySelector("#generate");
const colorBtn = document.querySelector("#color-btn");
const randomBtn = document.querySelector("#random-btn");
const hueBtn = document.querySelector("#hue-btn");
const colorChoice = document.querySelector("#colorChoice");
const squareClass = document.querySelectorAll(".square");

let isRandomMode = false;

//Default
document.addEventListener("DOMContentLoaded", () => {
    generateGrid(16);
})

//Making the grid
function generateGrid(numberInput) {
    for (let i = 0; i < numberInput * numberInput; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `calc(100%/${numberInput})`;
        square.style.height = `calc(100%/${numberInput})`;
        square.addEventListener("mouseenter", () => {
            if (isRandomMode) {
                square.style.backgroundColor = randomColor();
            } else {
                square.style.backgroundColor = `${colorChoice.value}`;
            }
        })

        grid.appendChild(square);
    }
}

function removeGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove());
}

// User setup
generateBtn.addEventListener("click", () => {
    removeGrid();
    const userResponse = prompt("From 1-100, how detailed do your want your drawing? (1 being the least and 100 the most)", "16");
    console.log(userResponse);
    if (userResponse < 1 || userResponse > 100) {
        alert(`Entry is invalid. 
Please enter a number between 1 and 100.`)
    } else {
        generateGrid(userResponse);
    }
});

//Reset Grid
function resetGrid() {
    removeGrid();
    generateGrid(16);
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", resetGrid);

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function applyRandomColor(square) {
    square.style.backgroundColor = randomColor();
}

// randomBtn.addEventListener("click", () => applyRandomColor(square))
randomBtn.addEventListener("click", () => {
    isRandomMode = true;
})

colorChoice.addEventListener("input", () => {
    isRandomMode = false;
})