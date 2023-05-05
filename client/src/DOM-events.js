// JavaScript code goes here

const p = document.querySelector('.ptag')

p.textContent = "Let's use some DOM events!"

const clickable = document.querySelector('#clickme')

function handleClick() { // what happens when event occurs
    clickable.textContent = "Hovered!"
}

clickable.addEventListener('mouseover', handleClick) // adds event to button (on mouseover)

const button2 = document.querySelector('.clickme2')

function changeColor() {
    button2.style['background-color'] = 'pink' // changes stylization of button
    button2.style.backgroundColor = 'green'
}

button2.addEventListener('click', changeColor) // adds event to button (on click)

const ptag = document.querySelector('p')

function changeColor2() {
    ptag.style.color = 'pink'
}

ptag.addEventListener('mouseover', changeColor2) // adds event to button (on mouseover)

function changeColor3() {
    ptag.style.color = 'black'
}

ptag.addEventListener('mouseout', changeColor3) // adds event to button (on mouseout)

const form = document.querySelector('form')

function handleSubmit(e) { // takes in event as parameter
    e.preventDefault() // prevents refresh of page
    let inputtedValue = e.target.input.value
    let inputtedValueSameAsAbove = document.querySelector('#input').value
    console.log(inputtedValueSameAsAbove)
}

form.addEventListener('submit', handleSubmit) // adds event to form (on submit)

const formName = document.querySelector('#nameForm')

formName.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.querySelector('#name')

    let inputtedValue = input.value

    let inputtedValueSameAsAbove = console.log(e.target.name.value)

    const welcome = document.createElement('p')

    const body = document.querySelector('body')

    body.appendChild(welcome)

    welcome.textContent = `Welcome, ${inputtedValue}!`
})