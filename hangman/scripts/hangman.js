class Hangman {
    constructor (word, guesses) {
        this.word = word.toLowerCase()
        this.guesses = guesses
        this.guessed = []
        this.status = "playing"
    }
    get puzzle() {
        let puzzle = ""
        for (let x = 0; x < this.word.length; x++) {
            if (this.guessed.includes(this.word[x]) || this.word[x] === " ") {
                puzzle += this.word[x]
            } else {
                puzzle += "*"
            }
        }
        return puzzle
    }
    guess(guess) {
        if (this.status === "playing") {
            guess = guess.toLowerCase()
            const uniqueGuess = !this.guessed.includes(guess)
            if (uniqueGuess) {
                this.guessed.push(guess)
            }
            if (uniqueGuess && !this.word.includes(guess)) {
                this.guesses--
            }
        }
        this.gameStatus()
    }
    gameStatus() {
        if (this.guesses <= 0) {
            this.status = "failed"
        }
        if (!this.puzzle.includes("*")) {
            this.status = "finished"
        }
    }
    get generateStatusMessage() {
        if (this.status === "playing") {
            return `Guesses left: ${this.guesses}`
        } else if (this.status === "failed") {
            return `Nice try! The word was "${this.word}".`
        } else if (this.status === "finished") {
            return `Great work! You guessed the word.`
        }
    }
}