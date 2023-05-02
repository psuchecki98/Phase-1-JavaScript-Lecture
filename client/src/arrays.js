//Start of Arrays Lecture, Basics on how to make array
//How to get a value from an Array
let nums = [1, 2, 3, 4, 5];

//How to show the entire array with console log
console.log(nums);
//How to get a specific value out of Array. 0 meaning first element in array.
console.log(nums[0]);

//Destructive properties
//How to add an element to end of an array .push()
nums.push(6);
console.log(nums);

//How to add an element to the beginning of an array .unshift()
nums.unshift(9);
console.log(nums);

//How to remove an element from the end of an array .pop()
nums.pop();
console.log(nums);

//How to remove an element from the beginning of an array .shift()
nums.shift();
console.log(nums);

//How to replace an element in an array within it, any position you ask for it
nums.splice(1, 1, "add a new element");
console.log(nums);
nums.splice(1, 1, 2); //returns to the original array for visual
console.log(nums);

//Non-destructive property
//Slice how to slice an array without ruining the original
//You have to make a new variable so that you can store the slice in
//If you do not then to see the slice you have to console.log(nums.slice(1, 4))
const slicedNums = nums.slice(1,4);
console.log(slicedNums);
console.log(nums);

//Spread operator
let string = ['a', 'b', 'c', 'd'];
console.log(...string);

//add elements to beginning of array (non-destructive)
const zStrings = ['z', ...string];
//adds elements to end of array
const zStringse = [...zStrings, 'e'];

console.log(zStrings);
console.log(zStringse);



