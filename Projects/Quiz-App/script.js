// Wait for DOM content to load before running JS
document.addEventListener("DOMContentLoaded", function() {
    // All quiz code

    // Array containg all quiz questions & properties

    const questions = [
        {
            question: "What is a regular expression in JavaScript?",
            answers: [
                "A method that describes a pattern of characters.",
                "A built-in JavaScript method.",
                "A data type that represents sequences of characters.",
                "A syntax and string pattern for searching, matching, and replacing text."
            ],
            correct: 3,
            feedback: "A regular expression is a sequence of characters that forms a search pattern. It can be used for text search and text replace operations."
        },

        {
            question: "Which function is used to search for a match in a string?",
            answers: [
                "search()",
                "match()",
                "splice()",
                "replace()",
            ],
            correct: 0,
            feedback: "The search() method searches the string for a match against a regular expression pattern and returns the index of the match."
        },

        {
            question: "What does the g flag in a regular expression stand for?",
            answers: [
                "Global match",
                "Generate match",
                "Go match",
                "None of the above",
            ],
            correct: 0,
            feedback: "The g flag stands for global search, meaning it will search for all matches in a string, not just the first."
        },

        {
            question: "How do you create a case-insensitive regular expression in JavaScript?",
            answers: [
                "Using the i flag.",
                "Using the c flag.",
                "Using the m flag.",
                "Using the s flag.",
            ],
            correct: 0,
            feedback: "The i flag is used to make the regular expression search case-insensitive."
        },

        {
            question: "Which method returns an array containing all matched groups?",
            answers: [
                "exec()",
                "match()",
                "search()",
                "split()",
            ],
            correct:  1,
            feedback: "The match() method retrieves the result of matching a string against a regular expression."
        },

        {
            question: "What does the ^ character mean in regular expressions?",
            answers: [
                "Matches the beginning of the input",
                "Matches the end of the input",
                "Matches any character",
                "Escapes a special character",
            ],
            correct: 0,
            feedback: "The ^ character matches the position at the beginning of the input."
        },

        {
            question: "What does the . character represent in regular expressions?",
            answers: [
                "Any single character, except newline or other line terminators.",
                "Decimal point",
                "Specific dot character",
                "None of the above",
            ],
            correct: 0,
            feedback: "In regular expressions, the . symbol matches any single character except newline characters."
        },

        {
            question: "Which flag is used for multiline matching?",
            answers: [
                "m",
                "x",
                "l",
                "u",
            ],
            correct: 0,
            feedback: "The m flag is used to perform multiline matching"
        },

        {
            question: "What does \\d match?",
            answers: [
                "Any non-digit character",
                "Any digit character",
                " Any word character",
                "Any whitespace character",
            ],
            correct: 1,
            feedback: "\\d matches any digit character (0-9)."
        },

        {
            question: "Which method is used to replace the matched substring with a replacement substring?",
            answers: [
                "replace()",
                "replaceAll()",
                "Both A and B",
                "reverse()",
            ],
            correct: 2,
            feedback: "Both replace() and replaceAll() methods are used to replace text in a string using a regular expression."
        },

        
        {
            question: "What does \\b represent in regular expressions?",
            answers: [
                "A backspace character",
                "A non-word boundary",
                "A word boundary",
                "A whitespace boundary",
            ],
            correct: 2,
            feedback: "\\b represents a word boundary"
        },

        
        {
            question: "How do you specify a set of characters that you wish to match?",
            answers: [
                "Using {}",
                "Using ()",
                "Using []",
                "Using //",
            ],
            correct: 2,
            feedback: "Square brackets [] are used to specify a set of characters to match."
        },

        
        {
            question: "What is the purpose of parentheses ( ) in regular expressions?",
            answers: [
                "To define a searchable pattern.",
                "To specify optional characters.",
                "To create a capture group.",
                "To escape special characters.",
            ],
            correct: 2,
            feedback: "Parentheses are used to create a capture group in regular expressions."
        },

        
        {
            question: "What does | mean in regular expressions?",
            answers: [
                "And",
                "Or",
                "Not",
                "Nor",
            ],
            correct: 1,
            feedback: "The | symbol is used as a logical OR in regular expressions."
        },
  
        {
            question: "What does ? signify in regular expressions?",
            answers: [
                "Zero or one occurrences of the preceding element.",
                "Exactly one occurrence of the preceding element.",
                "At least one occurrence of the preceding element.",
                "None of the above.",
            ],
            correct: 0,
            feedback: "The ? makes the preceding token in the regular expression optional."
        },
        
        {
            question: "What does + signify in regular expressions?",
            answers: [
                "Zero or more occurrences of the preceding element.",
                "One or more occurrences of the preceding element.",
                "Exactly one occurrence of the preceding element.",
                "None of the above.",
            ],
            correct: 1,
            feedback: "The + character matches one or more of the preceding element."
        },

        
        {
            question: "What does * signify in regular expressions?",
            answers: [
                "Zero or more occurrences of the preceding element.",
                "One or more occurrences of the preceding element.",
                "Optional occurrence of the preceding element.",
                "None of the above.",
            ],
            correct: 0,
            feedback: "The * character matches zero or more of the preceding element."
        },

        
        {
            question: "What does \\s match?",
            answers: [
                "Any whitespace character (space, tab, newline).",
                "Any non-whitespace character.",
                "A specific whitespace character.",
                "None of the above.",
            ],
            correct: 0,
            feedback: "\\s matches any whitespace character including space, tab, carriage return, newline, vertical tab, and form feed."
        },


        
        {
            question: "What does {2,4} specify in a regular expression?",
            answers: [
                "Match the preceding element at least 2 times, but not more than 4 times.",
                "Match exactly 2 to 4 characters of any type.",
                "Match the preceding two characters followed by four characters.",
                "None of the above.",
            ],
            correct: 0,
            feedback: "{2,4} is a quantifier that matches the preceding element at least 2 times and no more than 4 times."
        },

        
        {
            question: "What does \\w match?",
            answers: [
                "Any word character (letter, digit, underscore).",
                "Any non-word character.",
                "Any whitespace character.",
                "Any digit character.",
            ],
            correct: 0,
            feedback: "\\w matches any word character including letters, digits, and underscores."
        },

        {
            question: "What does the \\W represent in a regular expression?",
            answers: [
                "Any word character (letter, digit, underscore).",
                "Any non-word character.",
                "Any whitespace character.",
                "Any digit character.",
            ],
            correct: 1,
            feedback: "\\W matches any character that is not a word character, which includes punctuation and spaces."
        },

        {
            question: "How do you make a quantifier non-greedy in JavaScript regular expressions?",
            answers: [
                "Add ? after the quantifier.",
                "Add ! after the quantifier.",
                "Add + after the quantifier.",
                "Add ^ after the quantifier.",
            ],
            correct: 0,
            feedback: "Adding a ? after a quantifier (like *?, +?, ??, {n,}?) makes it non-greedy, meaning it will match the smallest possible number of characters."
        },

        {
            question: "What does the regular expression /^a/ match?",
            answers: [
                "Any string that includes 'a' at any position.",
                "Any string that starts with 'a'.",
                "Any string that ends with 'a'.",
                "Any string that contains the exact sequence 'a'.",
            ],
            correct: 1,
            feedback: "/^a/ matches any string that starts with the letter 'a'."
        },

        
        {
            question: "Which character in a regular expression is used to escape special characters?",
            answers: [
                "\\",
                "/",
                "|",
                "!",
            ],
            correct: 0,
            feedback: "The backslash \\ is used to escape special characters in regular expressions."
        },
        
        {
            question: "What would the regular expression /n+/ match in the string 'ninja'?",
            answers: [
                "Matches 'n' and 'i'.",
                "Matches 'n', 'i', and 'j'.",
                "Matches the first 'n' only.",
                "Matches 'nn' as a sequence.",
            ],
            correct: 2,
            feedback: "/n+/ matches one or more 'n's in sequence, which in 'ninja' would match the first 'n' only."
        },

        
        {
            question: "What is the function of the (?=...) syntax in a regular expression?",
            answers: [
                "Matches any string containing the specified pattern.",
                "Specifies a non-capturing group.",
                "Positive lookahead, asserts what follows the current position.",
                "Negative lookahead, asserts what does not follow the current position.",
            ],
            correct: 2,
            feedback: "(?=...) is a positive lookahead that asserts a condition for what immediately follows the current position in the string must satisfy the pattern inside the lookahead."
        },

        
        {
            question: "What does the negative lookahead (?!...) do in a regular expression?",
            answers: [
                "Matches a group multiple times.",
                "Excludes the pattern specified within the lookahead from matching.",
                "Looks for any characters not specified within the brackets.",
                "Matches any string where the subsequent characters do not form the specified pattern.",
            ],
            correct: 3,
            feedback: "(?!...) is a negative lookahead that asserts that the specified pattern does not occur immediately after the current position in the string."
        },

        
        {
            question: "How do you match either 'cat' or 'dog' in a string using regular expressions?",
            answers: [
                "/[cat|dog]/",
                "/(cat)|(dog)/",
                "/(cat|dog)/",
                "/{cat,dog}/",
            ],
            correct: 2,
            feedback: "/(cat|dog)/ correctly uses the pipe | to match either 'cat' or 'dog'."
        },

        
        {
            question: "What does {2} specify in a regular expression?",
            answers: [
                "Match exactly two instances of the preceding element.",
                "Match up to two instances of the preceding element.",
                "Match at least two instances of any character.",
                "None of the above.",
            ],
            correct: 0,
            feedback: "{2} is a quantifier that matches exactly two occurrences of the preceding element."
        },

        {
            question: "Which method would you use to test if a pattern exists within a string?",
            answers: [
                "search()",
                "test()",
                "match()",
                "find()"
            ],
            correct: 1,
            feedback: "The test() method tests for a match in a string. It returns true if there is a match, otherwise it returns false."
        }
    ]

    // Track which question the user currently viewing
    let currentQuestion = 0;

    // How many question user answered correctly
    let score = 0;

    // Stores timer interval reference
    let countdown;

    // Time limit to each questions (secs)
    let timeLeft = 30;

    // Flag to prevent multiple answer selections
    let answerSelected = false;

    // Labels for multiple choice answers

    const labels = ['a','b','c','d']

    // Displays current question and answer choices
    function displayQuestion() {
        // Reset answer selection status for new question
        answerSelected = false

        // Hide feedback from previous question
        document.getElementById('feedback').style.display = "none"

        // Update progress indicator text
        document.getElementById('progress').textContent = `Question ${currentQuestion + 1} of ${questions.length}`

        // Hide the "next" button until answer is selected
        document.getElementById('next-button').style.display = "none"

        // Reset & start interval timer
        clearInterval(countdown)
        timeLeft = 30
        timer()

        // Get current question object
        const questionObj = questions[currentQuestion]
        console.log(questionObj)


        // Update question text with number and content
        document.getElementById('question').textContent = `${currentQuestion + 1}. ${questionObj.question}`

        // Get and clear the answers list

        const answersUl = document.getElementById('answers')
        answersUl.innerHTML = ''

        // Loop thru each answer choice
        questionObj.answers.forEach((answer, index) => {
            // Create new list item for answer
            const li = document.createElement("li")

            // Create label (a, b, c, d)
            const labelSpan = document.createElement("span")
            labelSpan.className = "answer-label"
            labelSpan.textContent = labels[index] + ")"


            // Add label and answer text to list item
            li.appendChild(labelSpan)
            li.appendChild(document.createTextNode(" " + answer))

            // Add click handler to check if answer is correct.

            li.onclick = () => {
                if (!answerSelected) {
                    checkAnswer(index)
                }
            }

            // Add this answer to the list
            answersUl.appendChild(li)
        })
    }

     // Function to manage timer
     function timer() {
        // Update the timer display
        document.getElementById('timer').textContent = `Time Remaining: ${timeLeft} seconds`

        // Setup function to run every second
        countdown = setInterval(function() {
            // Check if time has run out
            if (timeLeft <= 0) {
                // Stop the timer
                clearInterval(countdown)

                //Check answer with -1 to check if time ran out.
                checkAnswer(-1)
            }

            else {
                // Decrement time and update display
                timeLeft--
                document.getElementById("timer").textContent = `Time Remaining: ${timeLeft} seconds`
            }
        }, 1000) // 1000 milliseconds / 1 second
    }

    function checkAnswer(index) {
        // Function to check if answer is correct
        if (answerSelected) return;

        // Mark answer has been selected
        answerSelected = true

        // Stop the countdown timer
        clearInterval(countdown)

        // Get correct answer from index from the current question
        const correctIndex = questions[currentQuestion].correct

        // Compare with selected answer to see if correct
        const isCorrect = index === correctIndex 

        // Get reference to the feedback element
        const feedback = document.getElementById('feedback')

        // Set CSS class based on answer right or not
        feedback.className = isCorrect ? "correct" : "incorrect"

        // Get label and text of correct answer
        const correctLabel = labels[correctIndex]
        
        const correctAnswer = questions[currentQuestion].answers[correctIndex]

        if (isCorrect) {
            // For correct answers
            feedback.innerHTML = `<strong>Correct!</strong> The answer is ${correctLabel}) ${correctAnswer} <br> ${questions[currentQuestion].feedback}`

            // Increment
            score++
        }

        else {
            if (index === -1) {
                // For time running out
                feedback.innerHTML =
                `<strong>Time's Up!</strong> The correct answer is ${correctLabel}) ${correctAnswer} <br> ${questions[currentQuestion].feedback}`
            }
            else {
            // For incorrect answers
            const selectedLabel = labels[index]
            const selectedAnswer = questions[currentQuestion].answers[index]

            feedback.innerHTML = `<strong>Incorrect.</strong> You selected ${selectedLabel}) ${selectedAnswer} <br> The correct answer is ${correctLabel}) ${correctAnswer} <br> ${questions[currentQuestion].feedback}`
            }
        }
        // Make feedback element visible
        feedback.style.display = "block"

        // Get all answer list items
        const answerItems = document.querySelectorAll("#answers li")

        // Highlight correct answer with green
        answerItems[correctIndex].style.backgroundColor = "rgba(0 ,128, 0, 0.1)"
        answerItems[correctIndex].style.borderColor = "green"

        // If wrong answer is selected, highlight red
        if (index !== -1 && index !== correctIndex) {
            answerItems[index].style.backgroundColor = "rgba(255, 0, 0, 0.1)"
            answerItems[index].style.borderColor = "red"
        }

        // Check if further questions remain

        console.log(currentQuestion)
        console.log(questions.length - 1)

        if (currentQuestion < questions.length - 1) {
            // If not last question, show "next" button
            document.getElementById("next-button").style.display = "inline-block"
        }
        else {
            // If it's last question, change to show results
            const nextButton = document.getElementById("next-button")
            nextButton.textContent = "Show Results"
            nextButton.style.display = "inline-block"
            nextButton.onclick = showResults;
        }
    }

    // Function to display final results
    function showResults() {
        console.log("results here")
        // Replace quiz content with results screen
        document.getElementById("quiz-container").innerHTML = `
        <div id="result">
        <h2>Quiz Complete!</h2>
        <p>You scored ${score} out of ${questions.length}</p>
        <p>Percentage: ${Math.round((score / questions.length) * 100)}%</p>
        <button onclick="location.reload()">Try Again</button>
        </div>
        `
    }

    // Add click handler for next button
    document.getElementById("next-button").addEventListener('click', () => {
        // Only advance if an answer was selected and more questions
        if (currentQuestion < questions.length - 1 && answerSelected) {
            // Go to next question
            currentQuestion++

            // display new question
            displayQuestion()
        }
    })

    // display first question
    displayQuestion()
})