/*  find the even and odd number in the given array */

// creating an array
let arr = [10, 20, 35, 37, 7, 9];

// using filter method check with the condition
let oddNumber = arr.filter((ele) => ele % 2 !== 0);
console.log(oddNumber);

let evenNumber = arr.filter((ele) => ele % 2 == 0);
console.log(evenNumber);
