/* write a program to reverse an a integer */

// create a function that accept number as a argument
function reverseNum (num){
    /*  then convert that number to string uing .toString()
        then convert that string to array using split("")
        then reverse the array using reverse()
        again convert that array to string join("")
    */ 
    let value = num.toString().split("").reverse().join("");
    
    // then convert that string to numbar using Number() method
    let reversedNum = Number(value)
    console.log(reversedNum);
}
reverseNum(108);
