let squareArea = document.querySelector(".square_area");
const bntPlay = document.querySelector("#play");
const selectDifficulty = document.getElementById('select_difficulty');

bntPlay.addEventListener("click", function() {

    squareArea.innerHTML = " ";

    let difficulty = selectDifficulty.value;

    if (difficulty == "easy") {

        for (let i = 1; i <= 49; i++) {
            let square = document.createElement("div");
            square.classList.add("box_easy");
            square.innerHTML = i;
        
            squareArea.append(square);
        }

    } else if (difficulty == "normal") {

        for (let i = 1; i <= 81; i++) {
            let square = document.createElement("div");
            square.classList.add("box_medium");
            square.innerHTML = i;
        
            squareArea.append(square);
        }

    } else if (difficulty == "hard") {

        for (let i = 1; i <= 100; i++) {
            let square = document.createElement("div");
            square.classList.add("box_hard");
            square.innerHTML = i;
        
            squareArea.append(square);
        }

    }
});




// ogni volta che clicco play la pagina si pulisce
// in base alla difficoltà mi appare la griglia


