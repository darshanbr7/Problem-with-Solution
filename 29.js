/*   Program to Check Armstrong Number in JavaScript   */
/*   is a number that is the sum of its own digits each raised to the power of the number of digits. */

function findArmstrongNum ( num ){
    // converting number to string
    let value = num.toString();
    //  finding the length of the number
    let length = value.length
     let sum = 0
     // iterating the string using for of() loop
    for(let ele of value){
        /*  
         to get the power of the value we are using Math.pow()
         first converting string to number using Number()
         assigning  the power value
        */
        sum += Math.pow(Number(ele),length)
    }
    if(num === sum) console.log(`${num} is armstrong Number`);
    else console.log(`${num} is not armstrong Number`);
}
findArmstrongNum(154)
