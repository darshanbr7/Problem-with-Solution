/*  write a program to find the factor  of the given number */
/*  factor -- the number when it divides  it  gives 0 as a reminder */

function findFactor (num) {
    for (let i = 1; i <= num; i++ ){
        if (num  % i === 0)  console.log(i);
    }
}
findFactor(15);