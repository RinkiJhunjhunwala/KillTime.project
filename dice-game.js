let isGameStarted = false; // To track if the game has started

function rollDice() {
    if (!isGameStarted) {
        document.querySelector("h1").innerHTML = "Refresh Me!";
        isGameStarted = true;
    }

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomDiceImage = "dice" + randomNumber1 + ".png";
    let randomImageSource = randomDiceImage;
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let randomImageSource2 = "dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Computer Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

function goToMainPage() {
    window.location.href = "index.html"; // Navigates back to the main page
}
