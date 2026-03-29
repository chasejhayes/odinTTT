// Tic Tac Toe


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

const playerOneNums = [
]

const playerTwoNums = [
]

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
        (gameBoard[index].chosenBy = "PlayerOne");
        playerOneNums.push(playerSelection);
    } else {
        gameBoard[index].chosenBy = "PlayerTwo";
        playerTwoNums.push(playerSelection);
    }

    turnCounter++;
}

function endGame(){
    if (playerOneNums.includes((0, 1, 2) || (0, 3, 6) || (1 ,4, 7) || (2, 5, 8) || (3, 4, 5) || (6, 7, 8) || (0, 4, 8) || (2 ,4, 6))){
        return console.log("Player One Wins")
    } else if (playerTwoNums.includes((0, 1, 2) || (0, 3, 6) || (1 ,4, 7) || (2, 5, 8) || (3, 4, 5) || (6, 7, 8) || (0, 4, 8) || (2 ,4, 6))){
        return console.log("Player One Wins")
}}

function returnChoice(value){
    return value
}

function xOrO(value){
    const box = document.getElementById(value);
    if (turnCounter % 2 == 0){
        box.textContent = "X"
    } else {
        box.textContent = "O"
    }
    
}




