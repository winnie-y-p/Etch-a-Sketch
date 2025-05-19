const grid = document.querySelector(".grid");
const generateBtn = document.querySelector("#generate");
const randomBtn = document.querySelector("#random-btn");
const hueBtn = document.querySelector("#hue-toggle-btn");
const colorChoice = document.querySelector("#colorChoice");
let isRandomMode = false;
let isHueOn = false;
let hueDirectionTracker = new Map()

//Default
document.addEventListener("DOMContentLoaded", () => {
    generateGrid(16);
})

//Making the grid
function generateGrid(numberInput) {
    for (let i = 0; i < numberInput * numberInput; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.id = `square - ${i}`;
        square.style.width = `calc(100%/${numberInput})`;
        square.style.height = `calc(100%/${numberInput})`;
        square.style.opacity = "1"
        hueDirectionTracker.set(square.id, false)

        square.addEventListener("mouseenter", () => {
            if (isRandomMode) {
                square.style.backgroundColor = randomColor();
            } else {
                square.style.backgroundColor = `${colorChoice.value}`
            }

            let opacityLevel = Number(square.style.opacity) ;
            if (isHueOn) {
                if (hueDirectionTracker.get(square.id) === true) { // going up in hue
                    opacityLevel += 0.1;
                    if (opacityLevel >= 1.0) {
                        opacityLevel = 1.0;
                        hueDirectionTracker.set(square.id, false)
                    }
                } else {
                    opacityLevel -= 0.1;
                    if (opacityLevel <= 0.1) {
                        opacityLevel = 0.1;
                        hueDirectionTracker.set(square.id, true)
                    }
                }
                square.style.opacity = opacityLevel.toString();
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

randomBtn.addEventListener("click", () => {
    isRandomMode = true;
})

colorChoice.addEventListener("input", () => {
    isRandomMode = false;
})

hueBtn.addEventListener("click", () => {
    hueBtn.classList.toggle("on-mode");
    hueBtn.classList.toggle("off-mode");

    if (hueBtn.classList.contains("on-mode")) {
        hueBtn.textContent = "Hue off";
        isHueOn = true;
    } else {
        hueBtn.textContent = "Add Hue";
        isHueOn = false;
    }

})