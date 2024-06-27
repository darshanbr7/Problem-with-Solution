/* what is the difference between "==" and "===" operator */

/* "==" (double equal) operator only compares the values it doesn't check for datatype */
// ex

let a = 10;
let b = "10";
console.log(a == b); // output  = true

// lets check using "===" operator
console.log(a === b); // output = false
