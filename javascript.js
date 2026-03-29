// Tic Tac Toe
// play1 turn. Makes a selection of a number 1-9 and object is updated to reflect

const gameBoard = [
    { position: 0, state: "unclicked", chosenBy: "notYet" },
    { position: 1, state: "unclicked", chosenBy: "notYet" },
    { position: 2, state: "unclicked", chosenBy: "notYet" },
    { position: 3, state: "unclicked", chosenBy: "notYet" },
    { position: 4, state: "unclicked", chosenBy: "notYet" },
    { position: 5, state: "unclicked", chosenBy: "notYet" },
    { position: 6, state: "unclicked", chosenBy: "notYet" },
    { position: 7, state: "unclicked", chosenBy: "notYet"},
    { position: 8, state: "unclicked", chosenBy: "notYet" },

];

const playerOne = {

}

const playerTwo = {

}

let turnCounter = 0;
function displayPlayerTurn() {
    const playerTurn = document.getElementById("turn_display");
    if (turnCounter % 2 == 0) {
        playerTurn.textContent = "Player One Turn"
    } else {
        playerTurn.textContent = "Player Two Turn"
    }
    turnCounter++
}

function turn(playerSelection){
    let index = gameBoard.findIndex(item => item.position === playerSelection);
    (gameBoard[index].state = "clicked");
    if (turnCounter % 2 == 0){
        (gameBoard[index].chosenBy = "PlayerOne") 
    } else {
        gameBoard[index].chosenBy = "PlayerTwo" 
    }
    turnCounter++;
}

turn(4);
turn(8);
turn(0);
turn(1)
console.log(gameBoard)


// function playgame() {
//     let playerSelection = input(num);
//     gameBoard
// }



