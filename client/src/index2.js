const p = document.querySelector('.ptag');

p.textContent = "Let's use some DOM events!";

//First Click Button and how addEventListener works
const clickable = document.querySelector('#clickme');

function handleClick() {
    clickable.textContent = "Clicked!";
};

clickable.addEventListener('click', handleClick);

//Second Click Button
const secondButton = document.querySelector('.clickme2');

function changeColor() {
    secondButton.style.backgroundColor = 'pink';
};

secondButton.addEventListener('click', changeColor);


//ptag hover over 
const ptag = document.querySelector('p');

function changeColor2() {
    ptag.style.color = 'pink';
};

ptag.addEventListener('mouseover', changeColor2);

function changeColor3() {
    ptag.style.color = 'black';
};

ptag.addEventListener('mouseout', changeColor3);

//form
const form = document.querySelector('form');
function handleSubmit(e) {
    e.preventDefault();
    console.log('e');
}

form.addEventListener('submit', handleSubmit);
