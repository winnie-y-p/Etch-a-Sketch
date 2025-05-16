const grid = document.querySelector(".grid");
const generateBtn = document.querySelector("#generate");


function generateGrid(numberInput) {
    for (let i = 0; i < numberInput * numberInput; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `calc(100%/${numberInput})`;
        square.style.height = `calc(100%/${numberInput})`;
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "white";
        })
        grid.appendChild(square);
    }
}

function removeGrid () {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove());
}

document.addEventListener("DOMContentLoaded", () => {
    generateGrid(16);
})
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

function resetGrid () {
    removeGrid();
    generateGrid(16);
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", resetGrid);


