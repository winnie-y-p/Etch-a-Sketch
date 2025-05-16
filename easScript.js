const grid = document.querySelector(".grid");
const generateBtn = document.querySelector("#generate");


function generateGrid(numberInput) {
    for (let i = 0; i < numberInput * numberInput; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `calc(100%/${numberInput})`;
        square.style.height = `calc(100%/${numberInput})`;
        grid.appendChild(square);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    generateGrid(16);
})
generateBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove());

    const userResponse = prompt("How many squares do you want on one side of the grid?", "16");
    console.log(userResponse);
    if (userResponse => 1 && userResponse <= 100) {
        generateGrid(userResponse);
    } else {
        alert(`Entry is invalid. 
Please enter a number between 1 and 100.`)
    }
});
