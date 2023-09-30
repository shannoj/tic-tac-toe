
// player.js
const Player = (name, symbol) => {
    return {
        name,
        symbol,
    };
};

// game.js
const Game = (player1, player2) => {
    const board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = player1;
    let winner = null;

    const checkWinner = () => {
        // Implement the logic to check for a winner
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6],            // Diagonals
        ];
    
        for (const condition of winConditions) {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                // We have a winner
                winner = currentPlayer;
                return;
            }
        }
    
        // Check for a draw
        if (!board.includes("")) {
            // No winner, the game is a draw
            winner = null;
        }
    };

    const makeMove = (index) => {
        if (!board[index] && !winner) {
            board[index] = currentPlayer.symbol;
            checkWinner();
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    };

    const getCurrentPlayer = () => {
        // Implement the logic to get the current player
        return currentPlayer;
    };

    const getWinner = () => {
        return winner;
    };

    return {
        makeMove,
        getCurrentPlayer,
        getWinner,
    };
};

const squares = document.querySelectorAll(".square");

const player1 = Player('James', 'X');

const player2 = Player('Devon', 'O');

const game = Game(player1, player2);

squares.forEach((square, index) => {
    square.addEventListener('click', () => {
        if (!square.textContent &&  !game.getWinner()) {
            square.textContent = game.getCurrentPlayer().symbol;
            game.makeMove(index);
        }
    })
})


