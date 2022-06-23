const puzzleElement = document.querySelector("#puzzle")
const statusElement = document.querySelector("#status")
const resetButton = document.querySelector("#reset")
let game

const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game = new Hangman(puzzle, 5)
    renderGame()
}

const renderGame = () => {
    puzzleElement.innerHTML = ""
    statusElement.textContent = game.generateStatusMessage

    game.puzzle.split("").forEach((letter) => {
        let spanElement = document.createElement("span")
        spanElement.textContent = letter
        puzzleElement.appendChild(spanElement)
    })
}

window.addEventListener("keypress", (e) => {
    const guess = e.key
    game.guess(guess)
    renderGame()
})

resetButton.addEventListener("click", startGame)

startGame()