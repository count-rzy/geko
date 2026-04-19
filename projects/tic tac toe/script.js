const board = document.getElementById("board")
const status = document.getElementById("status")
const cells = document.querySelectorAll(".cell")

let player = true
let game = true

const state = new Array(9).fill(null)

const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

cells.forEach((cell, i) => {
    cell.addEventListener("click", () => {
        if (!game) {
            return
        }
        if (cell.innerHTML) {
            return
        }
        const p = document.createElement("div")
        p.className = player ? "x" : "o"
        cell.appendChild(p)
        state[i] = player
        if (checkWin(player)) {
            status.textContent = `${player ? "X" : "O"} haxtecin`
        }
        else if (!state.includes(null)) {

            status.textContent = `Nichya`
        }
        player = !player

    })
})

function checkWin(turn) {
    return wins.some(pattern => {
        return pattern.every(pat => state[pat] === turn)
    })
}