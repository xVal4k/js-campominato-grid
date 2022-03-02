let squareArea = document.querySelector(".square-area");

for (let i = 1; i <= 49; i++) {
    let square = document.createElement("div");
    square.classList.add("box_easy");
    square.innerHTML = i;

    squareArea.append(square);
}