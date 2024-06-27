/*  wirte a program that accept a number and it need to return weather it is prime or not */

function findPrimeNumber(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(`${num} is a prime  number`);
  else console.log(`${num} is  not a prime  number`);
}
findPrimeNumber(20);
