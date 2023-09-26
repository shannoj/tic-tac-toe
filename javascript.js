const squares = document.querySelectorAll(".square");
let currentPlayer = 'X';

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (square.textContent === '') {
            square.textContent = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    })
})
