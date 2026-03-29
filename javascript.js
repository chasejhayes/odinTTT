

const gameBoard = [
    { position: 0, state: "unclicked", chosenBy: "notYet" },
    { position: 1, state: "unclicked", chosenBy: "notYet" },
    { position: 2, state: "unclicked", chosenBy: "notYet" },
    { position: 3, state: "unclicked", chosenBy: "notYet" },
    { position: 4, state: "unclicked", chosenBy: "notYet" },
    { position: 5, state: "unclicked", chosenBy: "notYet" },
    { position: 6, state: "unclicked", chosenBy: "notYet" },
    { position: 7, state: "unclicked", chosenBy: "notYet" },
    { position: 8, state: "unclicked", chosenBy: "notYet" },

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
    if (turnCounter % 2 == 0) {
        (gameBoard[index].chosenBy = "PlayerOne");
        playerOneNums.push(playerSelection);
    } else {
        gameBoard[index].chosenBy = "PlayerTwo";
        playerTwoNums.push(playerSelection);
    }
    turnCounter++;
}



const answerArr = [[0, 1, 2], [0, 3, 6], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]



function endGame() {
    if (answerArr.some(combo => combo.every(num => playerOneNums.includes(num)))) {
        const displayWinner = document.getElementById("winner");
        displayWinner.textContent = "Player One wins";
        resetButton();
    } else if (answerArr.some(combo => combo.every(num => playerTwoNums.includes(num)))) {
        const displayWinner = document.getElementById("winner");
        displayWinner.textContent = "Player Two wins";
        resetButton()
    }
}


function xOrO(value) {
    const box = document.getElementById(value);
    if (turnCounter % 2 == 0) {
        box.textContent = "X"
    } else {
        box.textContent = "O"
    }

}


function playGame(value) {
    turn(value)
    console.log(gameBoard)
    console.log(playerOneNums)
    console.log(playerTwoNums)
    endGame();

}



