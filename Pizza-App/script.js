// DOM Elements
const orderSection = document.getElementById('orderSection')
const trackerSection = document.getElementById('trackerSection')
const placeOrderBtn = document.getElementById('placeOrderBtn')
const newOrderBtn = document.getElementById('newOrderBtn')
const pickedUpBtn = document.getElementById('pickedUpBtn')
const progressFill = document.getElementById('progressFill')
const estimatedTime = document.getElementById('estimatedTime')
const currentStatus = document.getElementById('currentStatus')
const orderNumber = document.getElementById('orderNumber')
const updateList = document.getElementById('updateList')
const notification = document.getElementById('notification')

const steps = [
    document.getElementById('step1'),
    document.getElementById('step2'),
    document.getElementById('step3'),
    document.getElementById('step4'),
    document.getElementById('step5')
]

// Timer Variables
let countdownTimer;
let preparationTimer;
// Randomly set delivery time between 15-20 minutes
let minutesLeft = Math.floor(Math.random() * 6) + 15
let secondsLeft = 0;
let currentStep = 0;

// Process steps with timing (in seconds for the demo)
// In a real app, these would bei n minutes, but for demo purposes we use secs
const processSteps = [
    {name: "Order Received", duration: 60, progress: 0},
    {name : "Preparing", duration: 120, progress: 25},
    {name : "In the Oven", duration: 180, progress: 50},
    {name : "Quality Check", duration: 60, progress: 75},
    {name: "Ready for Pickup", duration: 0, progress: 100}
]

// Event Listeners
placeOrderBtn.addEventListener('click', startDeliveryProcess)
newOrderBtn.addEventListener('click', resetProcess)
pickedUpBtn.addEventListener('click', markAsPickedUp)

// Initialize order number
orderNumber.textContent = "#" + generateOrderNumber()

function startDeliveryProcess() {
    // Hide order section and show tracker
    orderSection.style.display = 'none'
    trackerSection.style.display = 'block'
    placeOrderBtn.style.display = 'none'

    // Show notification
    showNotification("Your order has been placed!")

    // Add initial update
    addUpdate("Order Received", "Your order has been received and is being processed")

    // Start countdown timer
    startCountdown()

    // Start the preparation process
    startPreparation()

    // Scroll to tracker section
    trackerSection.scrollIntoView({
        behavior: 'smooth'
    })
}

function startCountdown() {
    // Add log entry for timer method
    addUpdate("Timer Started", "Countdown time started using setInterval() to update every second.")

    // Update timer display initially
    updateTimerDisplay()

    // Set interval to update every second
    countdownTimer = setInterval(() => {
        // Decrease time
        if (secondsLeft === 0 ) {
            if (minutesLeft === 0) {
                // Time's up - should coincide with delivery complete
                clearInterval(countdownTimer)
                // Ensure timer shows 00:00
                estimatedTime.textContent = "00:00"
                return;
            }
            minutesLeft--
            secondsLeft = 59
        }
        else {
            secondsLeft--
        }

        // Update Display
        updateTimerDisplay()
    }, 1000)
}

function updateTimerDisplay() {
    estimatedTime.textContent = `${minutesLeft.toString().padStart(2,'0')}:${secondsLeft.toString().padStart(2,'0')}`
}
// hiya ^-^ 😜😽
function startPreparation() {
    // Start with first step already active
    updateStepProgress(0)

    // Function to process next step
    function processNextStep() {
        // If all steps are done, stop
        if (currentStep >= processSteps.length - 1) {
            // Set timer to 00:00 when ready for pickup
            minutesLeft = 0
            secondsLeft = 0
            updateTimerDisplay()
            showNotification("Your pizza is ready for pickup!")

            // Show the picked up button
            pickedUpBtn.style.display = 'inline-block'
            return;
        }

        // Move to next step
        currentStep++

        // Update progress and status
        updateStepProgress(currentStep)

        // Set the timeout for the next step
        const currentDuration = processSteps[currentStep].duration
        if (currentStep < processSteps.length - 1) {
            // Log the setTimeout usage for this step
            addUpdate("Timer Method", `Using setTimeout(${currentDuration * 1000}) to simulate "${processSteps[currentStep].name}" stage (${currentDuration / 60} minutes in real life)`)

            preparationTimer = setTimeout(processNextStep, currentDuration * 1000)
        }

        else {
            // This is the last step (Ready for pickup)
            // Show the picked up button
            pickedUpBtn.style.display = 'inline-block'
        }
    }

    // Log the setTimeout usage for the first transition
    addUpdate("Timer Method", `Using setTimeout(${processSteps[0].duration * 1000}) to simulate "${processSteps[1].name}" stage (${processSteps[0].duration / 60} minutes in real life)`)

    // set Timeout for first step transition
    preparationTimer = setTimeout(processNextStep, processSteps[0].duration * 1000)
}

function updateStepProgress(stepIndex) {
    // Update the progress bar
    progressFill.style.width = `${processSteps[stepIndex].progress}%`

    // Update status text
    currentStatus.textContent = processSteps[stepIndex].name

    // Update step markers
    for (let i = 0; i <= stepIndex; i++) {
        steps[i].classList.add('active')
        if (i < stepIndex) {
            steps[i].classList.add('completed')
        }
    }

    // Add update to the list
    addUpdate (processSteps[stepIndex].name, getStatusMessage(stepIndex))
}

function getStatusMessage(stepIndex) {
    const messages = [
        "We've received your order and it's been sent to the kitchen.", "Our chefs are preparing your pizza with fresh ingredients.", "Your pizza is now baking in our brick oven at 700°F.", 
        "We're checking that your pizza meets our quality standards.", 
        "Your pizza is ready! Please come to the counter to pick up your order." 
    ]

    return messages[stepIndex]
}

function addUpdate(title, message) {
    const now = new Date()
    const timeStr = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    })

    const updateItem = document.createElement('div')
    updateItem.className = 'update-item'

    // Find appropriate icon
    let icon = '🕒'
    if (title === "Order Received") icon = '📝'
    if (title === "Preparing") icon = '👨‍🍳'
    if (title === "In the Oven") icon = '🔥'
    if (title === "Quality Check") icon = '✅'
    if (title === "Ready for Pickup") icon = '🔔'
    if (title === "Time Method") icon = '⏱'
    if (title === "Timer Started") icon = '⏰'

    updateItem.innerHTML = `
    <div class="update-time">${timeStr}</div>
    <div class="update-icon">${icon}</div>
    <div class="update-text">
        <strong>${title}</strong><br>
        ${message}
    </div>
    `

    updateList.prepend(updateItem)
}

function showNotification(message) {
    notification.textContent = message
    notification.classList.add('show')

    setTimeout(() => {
        notification.classList.remove('show')
    }, 3000)
}

function resetProcess() {
    // Clear all timers
    clearInterval(countdownTimer)
    clearTimeout(preparationTimer)

    // Reset variables with fixed 15 minute time
    minutesLeft = 15
    secondsLeft = 0
    currentStep = 0

    // Reset UI
    progressFill.style.width = '0%'
    currentStatus.textContent = 'Order Received'

    // Reset step markers
    steps.forEach(step => {
        step.classList.remove('active')
        step.classList.remove('completed')
    })
    steps[0].classList.add('active')

    // Clear Updates
    updateList.innerHTML = ''

    // Hide the picked up button
    pickedUpBtn.style.display = 'none'

    // Generate new order number
    orderNumber.textContent = "#" + generateOrderNumber()

    // Hide tracker and show order form
    trackerSection.style.display = 'none'
    orderSection.style.display = 'block'
    placeOrderBtn.style.display = 'inline-block'

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function generateOrderNumber() {
    return Math.floor(10000 + Math.random() * 90000)
}

function markAsPickedUp() {
    // Add final update
    addUpdate("Picked Up", "Pizza has been picked up by the customer. Enjoy your meal!")

    // Stop any timers
    clearInterval(countdownTimer)
    clearTimeout(preparationTimer)

    //Update Display
    currentStatus.textContent = "Picked Up"
    estimatedTime.textContent = "00:00"

    // Update progress display (make it green)
    progressFill.style.width = "100%"
    progressFill.style.backgroundColor = "var(--accent-color)"

    // Show Notification

    showNotification("Thank YOu! Enjoy your pizza!")

    // Disable the picked up button
    pickedUpBtn.disabled = true
    pickedUpBtn.textContent = "Picked Up"

    // Log the timer methods used
    addUpdate("Time Method",
        "All Timers stopped with clearInterval() and clearTimeout()")
}
