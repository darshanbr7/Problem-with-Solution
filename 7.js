/* write a javascript program that arrange array in a assending and dessinding order */
// creating an array
let arr = [1, 20, 33, -10, 99, 90];

// creating a function that accept array as a argument
function assendingArray(arr) {
  //  sort method accept two parameter and it compare each of them
  let sortedArray = arr.sort((a, b) => a - b);
  return sortedArray;
}
console.log(assendingArray(arr));

function desindingArray(arr) {
  let sortedArray = arr.sort((a, b) => b - a);
  return sortedArray;
}

console.log(desindingArray(arr));
