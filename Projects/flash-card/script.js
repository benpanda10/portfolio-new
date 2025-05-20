const state = {
  numCards: 0,
  currentIndex: 0,
  flashcards: [],
};

const setupContainer = document.getElementById("setup-container");
const formContainer = document.getElementById("form-container");
const flashcardContainer = document.getElementById("flashcard-container");
const flashcardForms = document.getElementById("flashcard-forms");
const flashcardDisplay = document.getElementById("flashcard-display");
const currentCardSpan = document.getElementById("current-card");
const totalCardsSpan = document.getElementById("total-cards");

document.getElementById("start-btn").addEventListener("click", startCreatingCards);
document.getElementById("save-btn").addEventListener("click", saveFlashcards);
document.getElementById("prev-btn").addEventListener("click", showPreviousCard);
document.getElementById("next-btn").addEventListener("click", showNextCard);
document.getElementById("flip-btn").addEventListener("click", flipCurrentCard);
document.getElementById("restart-btn").addEventListener("click", restartApp);
document.getElementById("shuffle-btn").addEventListener("click", shuffleCards);

function startCreatingCards() {
    console.log("start here")
    // ger and validate the number of cards
    state.numCards = parseInt(document.getElementById('num-cards').value)

    if (isNaN(state.numCards) || state.numCards < 1) {
        alert("Please enter a valid number of flashcards.")
        return
    }

    // Generate form for each flashcard
    flashcardForms.innerHTML = ''

    for (let i=0 ; i < state.numCards; i++) {
        const formHtml = `
        <div class="flashcard-form">
            <h3>Flashcard ${i + 1}</h3>
            <div class="input-group">
                <label for="question-${i}">Question:</label> 
                <textarea id="question-${i}" rows="3" required></textarea>         
            </div>
            <div class="input-group">
                <label for="answer-${i}">Answer:</label> 
                <textarea id="answer-${i}" rows="3" required></textarea> 
            </div>
        `

    flashcardForms.innerHTML += formHtml

    // Switch to form view
    setupContainer.classList.add('hidden')
    formContainer.classList.remove('hidden')
}
}

function saveFlashcards() {
    // Reset the flashcards array
    state.flashcards = []
    let isValid = true

    for (let i = 0 ; i < state.numCards ; i++) {
        // Get the question and answer, removing whitespace
        const question = document.getElementById(`question-${i}`).value.trim()
        const answer = document.getElementById(`answer-${i}`).value.trim()

        // Validate that both fields have content

        if (!question || !answer) {
            isValid = false
            alert(`Please fill in both question and answer for Flashcard ${i+ 1}`)
            break
        }

        // Add valid flashcard to the array
        state.flashcards.push({question, answer})
    }

    // If all cards are valid, display them
    if (isValid) {
        state.currentIndex = 0
        displayFlashcards()
        formContainer.classList.add('hidden')
        flashcardContainer.classList.remove('hidden')
        updateCardCounter()
    }
}

function displayFlashcards() {
    // Exit if there are no flashcards
    if (state.flashcards.length === 0) return

    // Get the current card based on the index
    const card = state.flashcards[state.currentIndex]

    // Create the HTML with both front nad back faces
    flashcardDisplay.innerHTML = `
    <div class="flashcard" id="current-flashcard">
        <div class="flashcard-front">
            <p>${card.question}</p>
        </div>
        <div class="flashcard-back">
            <p>${card.answer}</p>
        </div>
    </div>
    `

    // Add Clicker listener to flip card on click
    document.getElementById('current-flashcard').addEventListener('click', flipCurrentCard)
}

function showPreviousCard() {
    // Only go back if not on first card
    if (state.currentIndex > 0) {
        // Decrement
        state.currentIndex--

        // Update
        displayFlashcards()
        updateCardCounter()
    }
}

function showNextCard() {
    // Only advance if not on the last card
    if (state.currentIndex < state.flashcards.length - 1) {
        // Increment the index
        state.currentIndex++

        // Update the display
        displayFlashcards()
        updateCardCounter()
    }
}

function flipCurrentCard() {
    // Get the current flashcard element
    const flashcard = document.getElementById('current-flashcard')

    // Toggle the 'flipped' class to trigger the CSS animation
    flashcard.classList.toggle('flipped')
}

function updateCardCounter() {
    // Updare current card num (+1)
    currentCardSpan.textContent = state.currentIndex + 1

    // Update total card count
    totalCardsSpan.textContent = state.flashcards.length
}

function restartApp() {
    // Reset to the first card
    state.currentIndex = 0

    // Hide the flashcard screen
    flashcardContainer.classList.add('hidden')

    // Show the setup screen
    setupContainer.classList.remove('hidden')
}

function shuffleCards() {
    // Fisher-Yates shuffle algorithm
    for (let i = state.flashcards.length-1;i>0;i--) {
        const j = Math.floor(Math.random()*(i+1));
        
        [state.flashcards[i], state.flashcards[j]]= 
        [state.flashcards[j], state.flashcards[i]]; 
        
    }
    // Reset to first card
    state.currentIndex = 0

    // Update display
    displayFlashcards()
    updateCardCounter()
}
