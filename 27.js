/*  find the fibanacci  number  */
/* 
 fibanacci series -- the sum of the two  initial number is the next number
*/

function findFibanacci (num) {
     let a = 0;
     let b = 1;
      
      for (let i = 0;  i<= num; i++){
        temp = a + b;
        console.log(temp);
        // assigning  b value for a
        a = b;
        // assigning temp value to b
        b = temp;
      }
}

findFibanacci(15);