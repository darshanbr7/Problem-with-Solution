/*  Count the number of divisors of a positive integer n. */


function countDivisiors( n ){
    for(let i = 1; i <= n; i++){
        if( n % i == 0) console.log(i);
    }
}
countDivisiors( 4 );
countDivisiors( 5);
countDivisiors( 12 );
countDivisiors( 30 );