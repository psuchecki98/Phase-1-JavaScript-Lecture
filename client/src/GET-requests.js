// JavaScript code goes here

// npm install -g json-server
// json-server --watch db.json

fetch("http://localhost:3000/books") // gets information from endpoint
    .then((resp) => resp.json()) // converts information to readable in JavaScript
    .then((data) => {
        renderBooks(data)
        renderBooksForEach(data)
    })

const body = document.querySelector('body')

// creates an h1 tag for each title
// renders each to the DOM
function renderBooks(books) {
    
    // iterates over books using indices
    for (let i = 0; i < books.length; i++) {
        let title = books[i].title
        // books[i]['title']

        let h1 = document.createElement('h1')
        body.appendChild(h1)

        h1.textContent = title
    }

}

// creates a p tag for each author and an img tag for each picture
// renders each to the DOM
function renderBooksForEach(books) {
    // 1. loop over books --> .forEach
    // 2. render each author as a p tag --> make a p tag, text = author, attach to body
    // 3. render each image as an img tag --> make an img tag, src = image, attach to body

    books.forEach((book) => {
        let author = book.author
        let imageURL = book.image

        let p = document.createElement('p')
        p.textContent = author
        body.appendChild(p)

        let img = document.createElement('img')
        img.src = imageURL
        body.appendChild(img)
    })
}



// DOMContentLoaded event is optional when using defer in script tag

/*
function fetchAPI() {
    return fetch("http://localhost:3000/books")
        .then((resp) => resp.json())
        .then((data) => console.log(data))
}
document.addEventListener('DOMContentLoaded', fetchAPI)
*/