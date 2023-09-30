
// player.js
export const Player = (name, symbol) => {
    return {
        name,
        symbol,
    };
};

// game.js
export const Game = () => {
    const board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = null;
    let winner = null;

    const checkWinner = () => {
        // Implement the logic to check for a winner
        if ((board[0] && board[1] && board[2] === currentPlayer.symbol) || (board[3] && board[4] && board[5] === currentPlayer.symbol) || (board[6] && board[7] && board[8] === currentPlayer.symbol)){
            winner == currentPlayer;
        }

        if ((board[0] && board[3] && board[6] === currentPlayer.symbol) || (board[1] && board[4] && board[7] === currentPlayer.symbol) || (board[2] && board[5] && board[8] === currentPlayer.symbol)){
            winner == currentPlayer;
        }

        if ((board[0] && board[4] && board[8] === currentPlayer.symbol) || (board[2] && board[4] && board[6] === currentPlayer.symbol)){
            winner == currentPlayer;
        }
    };

    const makeMove = (index) => {
        if (!board[index] && !winner) {
            board[index] = currentPlayer.symbol;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
            checkWinner();
        }
    };

    const getCurrentPlayer = () => {
        // Implement the logic to get the current player
    };

    return {
        makeMove,
        getCurrentPlayer,
        getWinner,
    };
};

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


