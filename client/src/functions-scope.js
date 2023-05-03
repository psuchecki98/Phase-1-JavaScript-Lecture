// JavaScript code goes here

//console.log("Hello, World!")

//named functions (sans parameters)
function printAString() {
    console.log("Printed by this function!");
}

// global scope

const globalNum = 0;

// Block Scope
// Will not work if you do not call the function from outside of the function.


function defineAVariable() {
    const funcVar = 4;
    console.log(funcVar);
}

defineAVariable();


function square(num) {
    let squaredNum = num * num;
    console.log(squaredNum);
}


function subtract(num1, num2) {
    let difference = num1 - num2

    return difference;
}

function divideBy2(num) {
    return num / 2;
}

function add(num1, num2) {
    return num1 + num2;
}


function calcAverage(num1, num2, dividingFunc) {
    const average = dividingFunc(num1 + num2);
    console.log(average);
}

calcAverage(3, 3, divideBy2);



// arrow function
const stringPrinted = () => {
    console.log("Printed by this function!");
}

const stringPrinted2 = () => console.log("Print by this function!");

//stringPrinted();
//stringPrinted2();

const subtracted = (num1, num2) => num1 - num2;


