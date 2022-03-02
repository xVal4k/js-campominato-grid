let squareArea = document.querySelector(".square-area");

for (let i = 1; i <= 100; i++) {
    let square = document.createElement("div");
    square.classList.add("box");
    square.innerHTML = i;

    squareArea.append(square);
}