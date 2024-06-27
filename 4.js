/* how to find duplicate element in a given array  */

// creating a function that accept an array
function findDuplicate(data) {
  // using ES6 array method  filter that accept 3 parameter 1. element 2. index, 3. array
  const duplicateElement = data.filter(
    // here we are comparing  each element index if element is duplicate on that time it return 1st time index value
    // hence appplying ! opperator it helps to gather elments which are all become falsy value
    (ele, index, arr) => arr.indexOf(ele) !== index
  );
  console.log(duplicateElement);
}
findDuplicate([1, 2, 3, 4, 55, 5, 5]);
