/*  write a program  to convert first letter of the string to upper Case */

function convertUperCase( str) {
    // convert the string into array while spce  exist using split(" ")
    let splitedString = str.split(" ");
    let updatedString = [];
    // itertating array which is converted string to array
    for(let i = 0; i < splitedString.length; i++){
        /*  extract the first element of the each word using index method and convert to UpperCase()
        then concat that with remaining word using " + " operator
        extract the remaining words using silce() passing index as a 1
        */
        updatedString.push( splitedString[i][0].toUpperCase() +  splitedString[i].slice(1)); 
    }
    // convert the array to string using join(" ") 
   console.log( updatedString.join(" "));
}
convertUperCase("hello user my self darshanbr")