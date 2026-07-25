const container = document.querySelector("#container");

function createGrid(size) {
    container.innerHTML = "";
    const totalSquares = size * size;
    const squareSize = 100 / size; 

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");

        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "pink";
        });

        container.appendChild(square);
    }
}

const btn = document.createElement("button");
btn.textContent = "Indicate grid size(Maximum 100):";
btn.id = 'gridButton';
document.body.insertBefore(btn, container);

btn.addEventListener("click", () => {
    let size = prompt("Grid size", );
    createGrid(size);
});