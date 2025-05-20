// Generate a random number between 1 and 100

let randomNumber = (Math.floor(Math.random * 100)+1)

// Store attempts

let attempts = 0

// get user input, function to guess a number

function checkGuess() {
    const guessInput = document.getElementById('guess')
    const feedback = document.getElementById('feedback')
    const userGuess = parseInt(guessInput.value)

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.innerHTML = "Please enter a number between 1-100."
        return;
    }

    attempts++

    if (userGuess === randomNumber) {
        feedback.innerHTML = `Congratulations! You guessed the number in ${attempts} attempts.`
    }

    else if (userGuess > randomNumber) {
        feedback.innerHTML = "Too high! Try again."
        feedback.style.color = 'red'
    }

    else {
        feedback.innerHTML = "Too low! Try again."
        feedback.style.color = 'red'
    }
}

//reset game

function resetGame() {
    let randomNumber = Math.floor(Math.random * 100)+1
    attempts = 0
    document.getElementById('guess').value = ''
    document.getElementById('feedback').value = ''
}