// tie would be all are "clicked" and no winning combos
// also how you'd keep them from being clicked again, use that value being turned
// allow players to put in their names and return as winner instead of player one and player two
// clear player winning with reset
// convert the entire thing into "factories" etc following the lesson

// 


const gameBoard = [
    { position: 0, clicked: false, chosenBy: "notYet" },
    { position: 1, clicked: false, chosenBy: "notYet" },
    { position: 2, clicked: false, chosenBy: "notYet" },
    { position: 3, clicked: false, chosenBy: "notYet" },
    { position: 4, clicked: false, chosenBy: "notYet" },
    { position: 5, clicked: false, chosenBy: "notYet" },
    { position: 6, clicked: false, chosenBy: "notYet" },
    { position: 7, clicked: false, chosenBy: "notYet" },
    { position: 8, clicked: false, chosenBy: "notYet" },

];

let playerOneNums = [
]

let playerTwoNums = [
]

let turnCounter = 0;

function displayPlayerTurn() {
    const playerTurn = document.getElementById("turn_display");
    playerTurn.textContent = "Player One Turn"
    if (turnCounter % 2 == 0) {
        playerTurn.textContent = "Player One Turn"
    } else {
        playerTurn.textContent = "Player Two Turn"
    }
}

function resetButton() {
    const resetButton = document.createElement("button");
    const biggerContainer = document.getElementById("bigger_container")
    biggerContainer.appendChild(resetButton);
    resetButton.textContent = "Play again?";
    let clearBoxes = document.querySelectorAll(".box");
    resetButton.addEventListener("click", () => {
        playerOneNums.length = 0;
        playerTwoNums.length = 0;
        clearBoxes.forEach(box => { box.textContent = "" })
        resetButton.remove();

    })


}

function turn(playerSelection) {
    let index = gameBoard.findIndex(item => item.position === playerSelection);
    (gameBoard[index].state = "clicked");
    (gameBoard[index].clicked = true)
    if (turnCounter % 2 == 0) {
        (gameBoard[index].chosenBy = "PlayerOne");
        playerOneNums.push(playerSelection);
    } else {
        gameBoard[index].chosenBy = "PlayerTwo";
        playerTwoNums.push(playerSelection);
    }
    turnCounter++;
}



// if playerNum.length == 5 and don't include any of the winning numbers, resurn tie


// ends the game by declaring winner or tie and spawns reset button
function endGame() {
    const answerArr = [[0, 1, 2], [0, 3, 6], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]
    if (answerArr.some(combo => combo.every(num => playerOneNums.includes(num)))) {
        const displayWinner = document.getElementById("winner");
        displayWinner.textContent = "Player One wins";
        resetButton();
    } else if (answerArr.some(combo => combo.every(num => playerTwoNums.includes(num)))) {
        const displayWinner = document.getElementById("winner");
        displayWinner.textContent = "Player Two wins";
        resetButton()
    } 
    tieGame()
    // } else if (playerOneNums.length == 5 & ((answerArr.some(combo => combo.every(num => !playerOneNums.includes(num))))) & ((answerArr.some(combo => combo.every(num => !playerTwoNums.includes(num)))))){
    //     const displayWinner = document.getElementById("winner");
    //     displayWinner.textConent = "It's a tie!";
    //     resetButton();
    // }

}

function tieGame() {
    if (gameBoard.every(click => click.clicked == true)) {
        const displayWinner = document.getElementById("winner");
        displayWinner.textContent = "It's a tie";
        resetButton();
    }
}

// clicked to update boxes with value
function xOrO(value) {
    const box = document.getElementById(value);
    if (turnCounter % 2 == 0) {
        box.textContent = "X"
    } else {
        box.textContent = "O"
    }

}

// clicked to play a turn
function playGame(value) {
    turn(value)
    endGame();

}



