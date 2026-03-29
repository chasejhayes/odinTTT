// Tic Tac Toe
// on click of box mark with x or o depending on turn counter
// make player selection = to whatever box was clicked on
// how to end game?
// how many combinations of winning are there: 
// 0 1 2, 0 3 6, 1 4 7, 2 5 8, 3 4 5, 6 7 8, 0 4 8, 2 4 6
// eight combinations of winning values 
// as the game goes on, store each chosen number in an array
// once an array has any combination of those 8 three-digit numbers declare winner

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

// 0 1 2, 0 3 6, 1 4 7, 2 5 8, 3 4 5, 6 7 8, 0 4 8, 2 4 6

function endGame(){
    if (playerOneNums.includes((0, 1, 2) || (0, 3, 6) || (1 ,4, 7) || (2, 5, 8) || (3, 4, 5) || (6, 7, 8) || (0, 4, 8) || (2 ,4, 6))){
        return console.log("Player One Wins")
    } else if (playerTwoNums.includes((0, 1, 2) || (0, 3, 6) || (1 ,4, 7) || (2, 5, 8) || (3, 4, 5) || (6, 7, 8) || (0, 4, 8) || (2 ,4, 6))){
        return console.log("Player One Wins")
}}


turn(0);
console.log(playerOneNums);
console.log(playerTwoNums);
turn(8);
turn(1);
turn(6);
turn(2)
console.log(playerOneNums);
console.log(playerTwoNums);

console.log(gameBoard)
endGame()


// function playgame() {
//     let playerSelection = input(num);
//     gameBoard
// }



