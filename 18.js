/*  Write a javascript program that count the number of repated elememnt in a string  and return the maximum repeated value and its count */
function findMaximum (str){
    // creating a empty object
    let obj = {};
    // iterating a string using for of ()
    for (let char of str){
        /* 
         using ternary operator checking the condition like    using Object[key] method
         if that value is exist in the object then incrementing the counts using ++ operator
         if not exist then  adding that char and default value to the object
        */
        (obj[char]) ?  obj[char]++ : obj[char] = 1;
    }
    

    // finding maximum repeated value and count
    let maxCount = 0;
    let maxRepeat = ""
    // iterating  object using for of t method
    for(let char in obj){
        // based on the condition 
        if(obj[char] > maxCount){
            maxCount = obj[char]
            maxRepeat = char
        }
    }
    console.log(maxCount);
    console.log(maxRepeat);
}
findMaximum("aabjjsamkal")