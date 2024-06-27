/* In a array find a  second largest element an  remove the largest element by index */

// creating an array
let arr = [1, 20, 99, 100, 98];

// creating a function that accept an array  as  a arguments
 function findElement(arr) {
  let largestElement = Math.max(...arr);
  arr.splice(arr.indexOf(largestElement), 1);
  let secondLargestElement = Math.max(...arr);
  console.log(secondLargestElement);
}
findElement(arr) 

/* function findLarge(arr) {
  let largetstElement = Math.max(...arr);
  let lowestElement = Math.min(...arr);
  console.log(largetstElement);
  console.log(lowestElement);
}
findLarge(arr); */
