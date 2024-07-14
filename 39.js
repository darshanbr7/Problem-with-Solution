/*  find the single element in the array */

 function findSingleElement ( arr ) {
    // here we are applying  simple steps by index of the ele with last index of the same element in the array
    return arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}
console.log(findSingleElement( [1, 1, 2, 2, 4, 4, 7, 9, 9])); 