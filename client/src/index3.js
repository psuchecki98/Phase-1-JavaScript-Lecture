// JavaScript code goes here

// npm install -g json-server
// json-server --watch db.json

fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then((data) => console.log(data))