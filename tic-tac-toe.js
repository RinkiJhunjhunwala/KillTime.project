let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function makeMove(cellIndex) {
    if (gameBoard[cellIndex] === "" && !checkWinner()) {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementById(`cell-${cellIndex}`).textContent = currentPlayer;
        if (checkWinner()) {
            document.getElementById("message").textContent = `${currentPlayer} Wins! 🎉`;
        } else if (gameBoard.every(cell => cell !== "")) {
            document.getElementById("message").textContent = "It's a Draw!";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            document.getElementById("message").textContent = `Player ${currentPlayer}'s Turn`;
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
    document.getElementById("message").textContent = "Player X's Turn";
    currentPlayer = "X";
}

function goToMainPage() {
    window.location.href = "index.html"; 
}
