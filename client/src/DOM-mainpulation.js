// JavaScript code goes here

// manipulating elements on the DOM

const h1 = document.querySelector('h1') // selects element by tag (RECOMMENDED METHOD)

const h2 = document.querySelector('#secondh1'); // selects element by ID

const h3 = document.getElementById('thirdh1') // selects element by ID

const pclass = document.querySelector('.ptag') // selects element by class

const allh1s = document.querySelectorAll('h1') // selects all elements by tag (RECOMMENDED METHOD)

h1.innerHTML = "I've changed the inner HTML!" // changes text of element

h1.innerText = "I've changed the inner text!" // changes text of element

h1.textContent = "I've changed the text content!" // changes text of element (RECOMMENDED METHOD)

console.log(allh1s) // console logs are great for debugging purposes when manipulating the DOM

// for loop to change text of each h1 tag
for (let i = 0; i < allh1s.length; i++) {
    allh1s[i].textContent = `Header number: ${i + 1}`;
}

// forEach loop to change text of each h1 tag
allh1s.forEach((h1) => h1.textContent = 'A new header')

// manual access to change text of each h1 tag
allh1s[0].textContent = "Header number 1"
allh1s[1].textContent = "Header number 2"
allh1s[2].textContent = "Header number 3"

// creating and manipulating elements on the DOM

const newP = document.createElement('p'); // creates new tag

const body = document.querySelector('body'); // selects parent tag

body.appendChild(newP); // appends new tag to parent tag on the DOM

newP.textContent = "This is a newly-added p tag!"; // changes text of element

newP.remove(); // removes element from DOM