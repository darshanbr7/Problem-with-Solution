/* write a program to print if the number  is divisable by 3 print "fizz"  if the number  is divisable by 5 print "buzz"
 if the number  is divisable by 3 & 5 print "fizz buzz"
*/
for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0) console.log("fizzbuzz");
    else if( i % 3 == 0 &&  i % 5 !== 0) console.log("fizz");
    else if( i % 5 == 0 &&  i % 3 !== 0) console.log("buzz");
    else console.log(i);
}