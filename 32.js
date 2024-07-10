/*  This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match. */

 function mergeString (str1, str2){
    let newString = str1;
    for(let ele of str2){
        if(!newString.includes(ele)){
            newString = newString+ele
        }
    }
    return newString;
 }

 console.log(mergeString("hello", "oellz"));
 console.log(mergeString("abcde", "cdefgh"));