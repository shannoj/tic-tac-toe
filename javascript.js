
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

const startGameButton = document.getElementById('startGame');
const player1NameInput = document.getElementById('player1Name');
const player2NameInput = document.getElementById('player2Name');
const currentPlayerDisplay = document.getElementById('current-player');
const winnerDisplay = document.getElementById('winner');

const game = Game();
let player1, player2;

startGameButton.addEventListener('click', () => {
    // Get player names from input fields
    const player1Name = player1NameInput.value || 'Player 1'; // Default to "Player 1"
    const player2Name = player2NameInput.value || 'Player 2'; // Default to "Player 2"

    // Create player objects
    player1 = Player(player1Name, 'X');
    player2 = Player(player2Name, 'O');

    // Update the game with player names
    const game = Game(player1, player2);

    // Hide the player name input fields and show the game board
    document.querySelector('.player-names').style.display = 'none';
    document.querySelector('.gameboard').style.display = 'grid';

    // Display the initial player
    currentPlayerDisplay.textContent = `Current Player: ${game.getCurrentPlayer().name}`;

    const squares = document.querySelectorAll(".square");

    squares.forEach((square, index) => {
        square.addEventListener('click', () => {
            if (!square.textContent &&  !game.getWinner()) {
                square.textContent = game.getCurrentPlayer().symbol;
                game.makeMove(index);
                currentPlayerDisplay.textContent = `Current Player: ${game.getCurrentPlayer().name}`;

                const winner = game.getWinner();

                if (winner){
                    winnerDisplay.textContent = `Winner: ${game.getWinner().name}`;
                    currentPlayerDisplay.style.display = 'none';
                }
            }
        })
    })
});




