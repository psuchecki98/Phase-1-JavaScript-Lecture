//const h1 = document.querySelector('secondh1');
//const h3 = document.getElementById('thirdh1');
//const pclass = document.querySelector('.ptag');
//const allh1s = document.querySelectorAll('h1');

//h1.textContent = "I've changed the text content";
//h3.textContent = "This is the third h1 tag on the page!";
//pclass.textContent = "I've now affected the p tag!"
//console.log(allh1s);

//for (let i = 0; i < allh1s.length; i++) {
  //  allh1s[1].textContent = `Header number: ${i + i}`;
//}
//

const newP = document.createElement('p');
const body = document.querySelector('body');
body.appendChild(newP);
newP.textContent = "This is a newly-added p tag!";
const newP2 = document.createElement('p');
body.appendChild(newP2);
newP2.textContent = "This is a second newly-added p tag!";
newP.id = 'special tag';
console.log(newP);
