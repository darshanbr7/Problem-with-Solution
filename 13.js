/* write a  program to find the sum of the  array */
let arr = [1, 10, 23, 67, 78];

function sumArr(arr) {
  // here reduce method that accept two parameter pre , cur at the end we are going to sum  all the element
  return arr.reduce((pre, cur) => pre + cur);
}
console.log(sumArr(arr));
