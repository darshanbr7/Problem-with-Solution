/* How to find an a largest and smallest element in an array  */

// creating a function that accept an array as a argument
const arr = [1, 3, 7, 0, 3, -1, 9, 101, 9999];
function findElement(data) {
  // using a sort method that accept  two arument inside it  compare a two element which is lesser it return first
  // let sortedArray = data.sort();

  let sortedArray = data.sort((a, b) => a - b);
  console.log(`Smallest elemnent is ${sortedArray[0]}`);
  console.log(`Largest element is ${sortedArray[sortedArray.length - 1]}`);
}
findElement(arr);

// alterntive method are

function maxNumber(arr) {
  return arr.reduce((pre, cur) => {
        // here it is comparing previous value with current value and usin ternary operator if that condition satisfy it is assigning that value to "pre" value
    return pre > cur ? pre : cur;
  });
}
console.log(maxNumber(arr));

function minNumber(arr) {
  return arr.reduce((pre, cur) => {
    // here it is comparing previous value with current value and usin ternary operator if that condition satisfy it is assigning that value to "pre" value
    return pre < cur ? pre : cur;
  });
}
console.log(minNumber(arr));
