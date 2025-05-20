// ERRORS
/* All should be good -- all patched! */

// Global Variables
let memoryContainer = document.getElementById("memory-container");
let memoryCardsContainer = document.getElementById('memory-cards-container');
let numOfCards = 1; // Number of cards shown
let attempts = 0; // Attempts until lost
let locationList = []; // Each memory card as a specified location -- this is the array to keep track. 
const body = document.body;
let playlist = []; // <- this is for storage of game history

// Creates a shortcut with the theme with 't'

document.addEventListener("keydown", function(event) {
  console.log(event)
  if (event.key === 't') {
    console.log('executed')
    setTheme();
  }
})

// When page loads, set the theme

document.addEventListener('DOMContentLoaded', function() {
  const theme = localStorage.getItem('theme') || 'light';
  console.log('theme', theme);
  setTheme(theme);
})

// Welcome Screen -- JS
let nameInput = document.getElementById('name-input');
let welcomeTitle = document.getElementById('welcome-title');
let welcomeText = document.getElementById('welcome-text');
let error = document.getElementById('error-text');

// If the user is returning, the welcome display switches.

document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem('user') != null) {
    let button = document.getElementById('submit-name');

    nameInput.style.display = 'none';
    button.textContent = 'Ready';
    welcomeText.textContent = `Welcome back ${localStorage.getItem('user')}! Wanna test your brain again 🤔😊?`;

    button.removeEventListener("click", validateName);
    button.addEventListener('click', instructions);
  }
});


// ================= This is IF the user visits for first time. ================= //

// Shortcut to Validate name
nameInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    validateName();
  }
})

// Event listener for submit button.

document.getElementById('submit-name').addEventListener("click", validateName)


function validateName() {
  let nameContent = nameInput.value;
  let namePattern = /^[a-zA-Z]{1,30}$/;
  let isValid = namePattern.test(nameContent);
  console.log(isValid);

  if (isValid) {

    // ---- This part of the code makes the cookie expire in 7 days using Date getter/setter. ---- //
    
    // Getter Method -- Changing Day

    let expirationDate = new Date();
    let day = expirationDate.getDate();
    day = day + 7;

    // Setter method -- Applying new day

    milliseconds = expirationDate.setDate(day);
    console.log(milliseconds);
    expirationDate = new Date(milliseconds);
    console.log(expirationDate);

    localStorage.setItem('user', nameContent)
    document.cookie = `user=${nameContent}; expires=${expirationDate}`;
    error.textContent = '';

    instructions();
  } 
  
  else {
    
    if (nameContent === '') {
      error.textContent = "Please enter a name.";
    } else {
      error.textContent = "Invalid Format. Only letters, must be first name not full.";
  }
}
nameInput.value = '';
}

function instructions() {
  // Change welcome DOM
  nameInput.style.display = 'none';
  welcomeTitle.textContent = 'Instructions';
  welcomeText.textContent = ''
  
  let ol = document.createElement('ol');
  welcomeText.appendChild(ol);
  ol.innerHTML = `
  <li>Boxes will pop up one by one.</li>
  <li>Click the boxes in ascending number order.</li>
  <li>When the level resets, your first click will always start at box one.</li>
  <li>The test will get harder as you on.</li>
  <li>Good luck! 😊</li>
  `
    document.getElementById('submit-name').textContent = "Ready!";

  document.getElementById('submit-name').removeEventListener("click", validateName);
  document.getElementById('submit-name').addEventListener("click", createBox);
}

// ================= End of first-time user JS code. ================= //

// For loop -- Creates the box objects

function createBox() {

  document.getElementById('welcome-container').style.display = "none";

  for (i = 0; i <= 26; i++) {
    console.log("loop started");
    const div = document.createElement("div");
    div.classList.add("memory-card");
    div.id = `card${i + 1}`;
    memoryCardsContainer.appendChild(div);
    let listener = () => {cardCheck(div)};
    div.addEventListener("click", listener);
  }
  callCard();
}


// This randomizes and picks a box to be shown.

function callCard() {

  if (document.getElementById('lose-screen').style.display === "block") {
    document.getElementById('lose-screen').style.display = "none";
    memoryCardsContainer.style.display = 'flex';
    numOfCards = 1;
    attempts = 0;
  }
  for (i = 1; i <= numOfCards; i++) {
    console.log("Call card number:", i);
    let cardLocation = Math.floor(Math.random() * 27) + 1;
    console.log(`card location for ${i}:`, cardLocation);

    if (locationList.includes(cardLocation)) {
        console.log('loop safetyguard executed.');
        console.log(`The iteration the loop happened was i = ${i}`);
        console.log(locationList);
        i--
        continue;
    }

    else {
        locationList.push(cardLocation);
    
        let cardCalled = document.getElementById(`card${cardLocation}`);
        cardCalled.classList.add("memory-visible");
        cardCalled.textContent = i;
    }
  }
}

// Check if the user clicked the correct number

function cardCheck(div) {
  console.log("Card check was started!");

  attempts++;
  let num = div.textContent;
  console.log("Attempt:", attempts);
  console.log("Number:", num);



  
  if (attempts == num) {
    div.style.backgroundColor = 'var(--base-thirdary)';
    div.style.color = 'var(--base-thirdary)';
  }

  else {
   loseScreen(); 
  }
  hideCard();
  checkWin();
}

// Hides card when clicked

function hideCard() {
    if (attempts === 1) {
        locationList.forEach(num => {
            let card = document.getElementById(`card${num}`);
            card.classList.add('memory-flipped');
        })
    }
}

function checkWin() {
    if(attempts === numOfCards) {
        console.log(`level ${numOfCards} done`);
        numOfCards++
        console.log("Location list array", locationList);

        removeCards();

        attempts = 0;
        console.log("This SHOULD BE ZERO:", attempts);
        locationList = [];
        callCard();
    }
}

function loseScreen() {
  removeCards();
  document.getElementById('lose-screen').style.display = 'block';
  document.getElementById('score').innerHTML = `Your score this time was <span style="font-weight: bold;">${numOfCards}</span>.`;
  memoryCardsContainer.style.display = 'none';

  // ===== This part grabs the date and score for the history section later on. ==== // 

  // Grabs Date the session occured.
  let datePlayed = new Date();
  datePlayed = datePlayed.toLocaleDateString();

  // Note: numOfCards is the score.

  if(localStorage.getItem('playCount') == null) {
    localStorage.setItem('playCount', 0);
  }

  let playCount = parseInt(localStorage.getItem('playCount')) + 1;
  localStorage.setItem('playCount', playCount);

  playlist.push({
    "game": playCount,
    "score": numOfCards,
    "date": datePlayed
  });
  playlistString = JSON.stringify(playlist);
  localStorage.setItem('playlist', playlistString);
}

function removeCards() {
  locationList.forEach(num => {
    let card = document.getElementById(`card${num}`);
    card.classList.remove('memory-visible');
    card.classList.remove('memory-flipped');
    card.style.backgroundColor = '';
    card.style.color = '';
});
}

// History Section


document.addEventListener('DOMContentLoaded', function() {
  let playlistLocal = localStorage.getItem('playlist');
  if (playlistLocal != null) { 
  playlistLocal = JSON.parse(playlistLocal);
  playlistLocal.forEach(obj => {
    playlist.push(obj);
  })
}
})

document.getElementById('history-button').addEventListener('click', showHistory);

function showHistory() {
  let historyContainer = document.getElementById('history-container');
  historyContainer.style.display = 'grid';

  playlist.forEach(obj => {
    let div = document.createElement("div");
    div.classList.add('history-card');
    div.innerHTML = `Test: ${obj.game} <br> Score: ${obj.score} <br> Date: ${obj.date}`;
    document.getElementById('history-cards').appendChild(div);
  })

  if (playlist == '') {
    document.getElementById('history-cards').textContent = 'No tests found.' 
  }
}

// History Search by Date

document.getElementById('history-search').addEventListener("input", historySearch); // <-- input allows for real-time searching

function historySearch() {
  let searchInput = document.getElementById('history-search').value;

  if (searchInput === '') { // If search is empty, show all game history.
    document.getElementById('history-cards').innerHTML = '';
    showHistory();
  }
  else {
  let searchFiltered = playlist.filter(obj => {
    let date = obj.date; // grabs the date value in the object (object is one game)

    let arrSplit = date.split(''); // splits each character
    let inputSplit = searchInput.split('');
    console.log(arrSplit);
    console.log(inputSplit);

    for (i = 0 ; i < arrSplit.length ; i++) { // for each character in input and obj.date, compare the specific character if match.
      if (arrSplit[i] == inputSplit[i]) {
        if (i + 1 === inputSplit.length) { // if all the characters matched, return the obj into the filtered array
          console.log('i turned on at', i);
          return obj;
        }
      }
      else { // if not matched, break the loop.
        break;
      }
    }
  })
  console.log(searchFiltered);

// Updates Test History Display

  document.getElementById('history-cards').innerHTML = '';
  searchFiltered.forEach(obj => {
    let div = document.createElement("div");
    div.classList.add('history-card');
    div.innerHTML = `Test: ${obj.game} <br> Score: ${obj.score} <br> Date: ${obj.date}`;
    document.getElementById('history-cards').appendChild(div);
  })

  if (searchFiltered.length == 0){
    document.getElementById('history-cards').textContent = 'No tests found.';
  }
}
}

// ==== BUTTONS IN HISTORY SECTION ==== //

// Exit Button

document.getElementById('exit-button').addEventListener('click', function() {
  let historyContainer = document.getElementById('history-container');
  document.getElementById('history-cards').innerHTML = '';
  historyContainer.style.display = 'none';
})

// Clear button

document.getElementById('clear-button').addEventListener('click', function() {
  playlist = [];
  localStorage.removeItem('playlist');
  localStorage.removeItem('playCount');
  document.getElementById('history-cards').innerHTML = '';
})

// Clear Name button

document.getElementById('clear-name-button').addEventListener('click', function() {
  localStorage.removeItem('user');
  window.location.reload()
})

// ==== END OF HISTORY SECTION ===== //

// Button for Theme Switcher

document.getElementById('theme-button').addEventListener('click', setTheme);

function setTheme(theme) {

  if (body.classList.value === 'light-theme' || theme === 'dark-theme') {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  }

  else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}

// Session Timer

let second = 0;
let minute = 0;
let hour = 0;

let sessionTime = setInterval(() => {
  let footer = document.getElementById('footer');

  second++
  if (second === 60) {
    second = 0;
    minute++
  }

  if (minute === 60) {
    minute = 0;
    second = 0;
    hour++
  }
  let time = `${hour.toString().padStart(2,'0')}:${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`;
  footer.textContent = `Session Time: ${time}`;
  sessionStorage.setItem('sessionTime', time)
}, 1000)