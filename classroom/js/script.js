// // function tari(year) {
// //     return 2026 - year
// // }

// // const year = 1945
// // const age = tari(year);

// // console.log(`duq ${age} tarekan eq`)

// function tiv(number) {
//   return number ** 3;
// }

// console.log(tiv(3))

//function  naxadasutyun(str){
 //   return str.charAt(0).toUpperCase() + str.slice(1);
//}

//console.log(naxadasutyun('jdeb ijgs igie'))
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let currentPlayer = "x";
let gameActive = true;

let board = ["","","","","","","","",""];

const winPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach((cell, index) => {
cell.addEventListener("click", () => cellClick(cell, index));
});

function cellClick(cell, index) {

if(board[index] !== "" || !gameActive) return;

board[index] = currentPlayer;

cell.classList.add(currentPlayer);

checkWinner();

currentPlayer = currentPlayer === "x" ? "o" : "x";

statusText.textContent = "Ход: " + currentPlayer.toUpperCase();
}

function checkWinner() {

for(let pattern of winPatterns) {

let [a,b,c] = pattern;

if(
board[a] &&
board[a] === board[b] &&
board[a] === board[c]
){
statusText.textContent =
"Победил: " + currentPlayer.toUpperCase();

gameActive = false;
return;
}
}

if(!board.includes("")) {

statusText.textContent = "Ничья!";
gameActive = false;
}
}

function restartGame() {

board = ["","","","","","","","",""];

gameActive = true;

currentPlayer = "x";

statusText.textContent = "Ход: X";

cells.forEach(cell => {
cell.classList.remove("x");
cell.classList.remove("o");
});
}