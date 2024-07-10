/* Find the difference between the square of the sum of the first n natural numbers (1 <= n <= 100) and the sum of their squares.

 */

function  findSum( value ){
    // square of sum of the numbers
   function squareOfSumOfNumber (){
        let squareSum = 0;
        for(let i = 1; i <= value; i++){
        squareSum += i;
        }
        return Math.pow(squareSum, 2);
   }
    function sumOfSquareOfNumber (){
        let sumSqare = 0;
        for(let i = 1; i <= value; i++){
         sumSqare = sumSqare + Math.pow(i, 2);
        }
        return sumSqare;
    }

    // returning the difference 
   return  squareOfSumOfNumber() - sumOfSquareOfNumber();
}

console.log(findSum(10));