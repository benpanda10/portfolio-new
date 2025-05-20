// Global Variables

let bookInput = ""

// Initialize Bookshelf array w/ books

let books = ["Macbeth", "Withering Heights", "The Scarlet Letter", "To All Seasons"]

function addToFront() {
    bookInput = document.getElementById('bookInput')
    const newBook = bookInput.value.trim();
    console.log(newBook)

    if (newBook !== "") {
    books.unshift(newBook)
    bookInput.value=''
    displayBooks()
    console.log(books)
    }
}

function addToEnd() {
    bookInput = document.getElementById('bookInput')
    const newBook = bookInput.value.trim();
    console.log(newBook)

    books.push(newBook)
    bookInput.value=''
    displayBooks()
    console.log(books)
}

function removeFromFront() {
    if (books.length > 0) {
        const removedFrontBook = books.shift()
        displayBooks()

    }
}

function removeFromEnd() {
    if (books.length > 0) {
        const removedEndBook = books.pop()
        displayBooks()

    }
}

function displayBooks() {
    let bookList = document.getElementById('bookList');
    if (books.length == 0) {
        bookList.innerHTML = `<p>No books on shelf.</p>`
        return;
    }

    let html = `<strong>Front of Shelf</strong> <br>`

    books.forEach((i, index)=> {
        html += `${index + 1}. ${i} <br>`
    })

    html += `<strong>End of Shelf</strong>`
    bookList.innerHTML = html;
}

displayBooks()
console.log(books)