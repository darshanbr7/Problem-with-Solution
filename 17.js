/*  write a program check the string is palendrome or not 
what is palendrome ?
it is  a word , number , sentence , it is  same as a read through backwords 
ex: abba   ==> abba
 */

// creating a function that accept a string as a argument
function isPalendrome (str) {
    // creating a empty sting 
    let revereStr= "";
    // iterating a empty string using  for loop in decremental manner
    for(let i =  str.length -1 ; i >= 0; i--){
        // using concat method adding a ecah values to reverse string
      revereStr = revereStr.concat(str[i]);
    }
    // using conditional statement checking values 
     if(str === revereStr) console.log(`${ str}  is palendrome`);
     else console.log(`${ str} is not  palendrome`);

     // aletrnative way is 
     
      let isReverse = str.split("").reverse().join("");
      console.log(str === isReverse);

    
}
isPalendrome("abba");
isPalendrome("abbaz");