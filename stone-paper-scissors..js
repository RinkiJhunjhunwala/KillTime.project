function playerChoice(choice) {
    resetSelection();

    const playerImg = document.getElementById(`player${capitalize(choice)}`);
    playerImg.classList.add("selected");

    const choices = ["stone", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const computerImg = document.getElementById(`computer${capitalize(computerChoice)}`);
    computerImg.classList.add("selected");

    const result = determineResult(choice, computerChoice);
    document.getElementById("message").textContent = result;
}

function resetGame() {
    resetSelection();
    document.getElementById("message").textContent = "Make Your Choice!";
}

function resetSelection() {
    const images = document.querySelectorAll("img");
    images.forEach((img) => img.classList.remove("selected"));
}

function determineResult(player, computer) {
    if (player === computer) {
        return "It's a Draw!";
    } else if (
        (player === "stone" && computer === "scissors") ||
        (player === "paper" && computer === "stone") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You Win! 🎉";
    } else {
        return "You Lose! 😢";
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function goToMainPage() {
    window.location.href = "index.html"; 
}
