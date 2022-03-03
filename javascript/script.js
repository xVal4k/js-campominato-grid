let squareArea = document.querySelector(".square_area");
const bntPlay = document.querySelector("#play");
const selectDifficulty = document.getElementById('select_difficulty');

bntPlay.addEventListener("click", function() {

    squareArea.innerHTML = " ";

    let difficulty = selectDifficulty.value;
    let cells;


    if (difficulty == "easy") {
        cells = 100;
    } else if (difficulty == "normal") {
        cells = 81;
    } else if (difficulty == "hard") {
        cells = 49;
    }
    

    for (let i = 1; i <= cells; i++) {
        let square = document.createElement("div");
        square.classList.add("box");
        square.innerHTML = i;

        if (difficulty == "easy") {
            square.classList.add("box_easy");
        } else if (difficulty == "normal") {
            square.classList.add("box_normal");
        } else if ( difficulty == "hard") {
            square.classList.add("box_hard");
        }

        squareArea.append(square);

        square.addEventListener("click", function() {
            square.classList.add("square_selected");
        });
    }
})

