// JavaScript code goes here

// npm install -g json-server
// json-server --watch db.json

fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then((data) => {
        renderBooks(data)
        renderBooksForEach(data)
    })

function renderBooks(books) {
    for (let i = 0; i < books.length; i++) {
        let title = books[i].title

        let h1 = document.createElement('h1')
        body.appendChild(h1)

        h1.textContent = title
    }

function renderBooksForEach(books) {
    books.forEach((book) => {
        let.author = book.author
        let imageURL = book.image

        let p = document.createElement("p")
        p.textContent = author
        body.appendChild(p)

        let img = document.createElement("img")
        img.src = imageURL
        body.appendChild(img)
    })
}
}