# JavaScript Capstone Checkoff

This document verifies the JavaScript portion of my Capstone Project checks off in a clean, organized manner.

## 1. Variable Naming and Indentation

- Camel Casing -- Correct format for variable naming
```js
    let memoryContainer = document.getElementById("memory-container");
    let memoryCardsContainer = document.getElementById('memory-cards-container');
```

- Proper Indentation -- Indented Correctly
```js
document.addEventListener("keydown", function(event) {
  if (event.key === 't') {
    console.log('executed')
    setTheme();
  }
})
```

## 2. Function Naming and Modularity

- Functions with clear names -- Clear name for the function
```js
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
```

## 3. Arrays and Objects Usage

- Arrays for collections
```js
let playlist = []; // <- this is for storage of game history
let locationList = [];
```

- Create objects with properties
```js
  playlist.push({
    "game": playCount,
    "score": numOfCards,
    "date": datePlayed
  });
```

## 4. Array Methods

- push Method
```js
    playlist.push(obj);
```

- forEach method
```js
        locationList.forEach(num => {
            let card = document.getElementById(`card${num}`);
            card.classList.add('memory-flipped');
        })
```

- Filter Method
```js
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
```

## 5. Looping/Iteration

```js
  for (i = 0; i <= 26; i++) {
    console.log("loop started");
    const div = document.createElement("div");
    div.classList.add("memory-card");
    div.id = `card${i + 1}`;
    memoryCardsContainer.appendChild(div);
    let listener = () => {cardCheck(div)};
    div.addEventListener("click", listener);
  }
```
This is a loop to create all the boxes when the tester starts.

## 6. JSON Data Handling

- Parsing
```js
document.addEventListener('DOMContentLoaded', function() {
  let playlistLocal = localStorage.getItem('playlist');
  if (playlistLocal != null) { 
  playlistLocal = JSON.parse(playlistLocal);
  playlistLocal.forEach(obj => {
    playlist.push(obj);
  })
}
})
```

- Stringify
```js
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
```

## 7. Web Storage

- Local Storage -- For displaying theme and welcome message
```js
document.addEventListener('DOMContentLoaded', function() {
  const theme = localStorage.getItem('theme') || 'light';
  console.log('theme', theme);
  setTheme(theme);
})

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

```

- Session Storage -- For session timer at bottom
```js
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
```

## 8. Saving/Retrieving Data

- Saving preferences
```js
    localStorage.setItem('theme', 'dark-theme');
```

- Loading preferences
```js
  const theme = localStorage.getItem('theme') || 'light';
```

## 9. Cookies with expiry

```js
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
```
This portion of codes uses a date getter/setter to set the cookie to expiry 7 days from creation.

## 10. DOM Manipulation

```js
  let ol = document.createElement('ol');
  welcomeText.appendChild(ol);
```
This code was used when the instructions pop up. It creates an ol and appends it to the container.

## 11. CSS Manipulation via JS

- Adding via classList
```js
    div.classList.add("memory-card");
```

- Adding directly to element
```js
    nameInput.style.display = 'none';
```

## 12. Theme Preference

```js
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
```

## 13. Comments and Code Readability

- Used to section off segments of JS
```js
// ==== BUTTONS IN HISTORY SECTION ==== //
```

- Used to describe certain functions
```js
 for (i = 0 ; i < arrSplit.length ; i++) { // for each character in input and obj.date, compare the specific character if match.
      if (arrSplit[i] == inputSplit[i]) {
        if (i + 1 === inputSplit.length) { // if all the characters matched, return the obj into the filtered array
          console.log('i turned on at', i);
          return obj;
        }
```

## 14. Error Handling and Debugging

- Used console.log to catch errors
```js
for (i = 1; i <= numOfCards; i++) {
    console.log("Call card number:", i); // <--
    let cardLocation = Math.floor(Math.random() * 27) + 1;
    console.log(`card location for ${i}:`, cardLocation); // <--

    if (locationList.includes(cardLocation)) {
        console.log('loop safetyguard executed.'); // <--
        console.log(`The iteration the loop happened was i = ${i}`); // <--
        console.log(locationList); // <--
        i--
        continue;
    }
```

## 15. Regex Validation
```js
let namePattern = /^[a-zA-Z]{1,30}$/;
```
This code is used when verifying your name.

## 16. Timer and Date Objects
```js
    // Getter Method -- Changing Day

    let expirationDate = new Date();
    let day = expirationDate.getDate();
    day = day + 7;

    // Setter method -- Applying new day

    milliseconds = expirationDate.setDate(day);
    console.log(milliseconds);
    expirationDate = new Date(milliseconds);
    console.log(expirationDate);
```

## 17. Math, String, Random Methods
```js
 let cardLocation = Math.floor(Math.random() * 27) + 1;
```
Used when randomizing card location.

## 18. Event Listeners and Shortcuts

- Shortcut -- for switching theme with 't' key.
```js
document.addEventListener("keydown", function(event) {
  console.log(event)
  if (event.key === 't') {
    console.log('executed')
    setTheme();
  }
})
```

- Listeners
```js
nameInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    validateName();
  }
})
```

# 19. Real-Time Search History
```js
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
```

## 20. CRUD Functionality

```js
    locationList.push(cardLocation); // Create

    localStorage.getItem('user'); // Read

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

// Remove

    button.removeEventListener("click", validateName);
```