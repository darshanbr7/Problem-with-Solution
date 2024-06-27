/*  find the missing element in the given array */

// creating a array
let arr = [1, 2, 3, 4, 5, 6, 9, 10];

// create a function that accept array as a argumnet
function findElement(arr) {
  // finding minimum and maximum  value using Math method
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  // creating an array to store missed values
  const missedElement = [];

  // using for loop iterating by  setting initial value as a minValue and maxium value as a MaxValue
  for (let i = minValue; i < maxValue; i++) {

    // here checking with the conditional operator with indexOf() method 
    // if the element present in the array it return 1  not  it return -1
    // hence putting condition as a value < 0
    if (arr.indexOf(i) < 0) {

        // if that condition match push the element to missed array
      missedElement.push(i);
    }
  }
  console.log(missedElement);
}
findElement(arr);
