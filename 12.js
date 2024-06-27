/*  write a program to find the factiorial of the   given number */

// negative factorial is not possible
function findFactiorial(num) {
  // here  setting initail value 1 because anything * 0 = 0
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum = sum * i;
  }
  console.log(sum);
}
findFactiorial(5);
