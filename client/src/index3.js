// JavaScript code goes here

// npm install -g json-server
// json-server --watch db.json

fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then((data) => console.log(data))

function renderBooks(books) {
    for (let i = 0; i < books.length; i++) {
        let title = books[i].title

        let h1 = document.createElement('h1')
        body.appendChild(h1)

        h1.textContent = title
    }
}