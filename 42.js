 /*   when we are going to use Number()  and ParseInt() method in js */

 // Number () it is used when we are dealing with the string
 //  if the empty String passes It return 0
 console.log(Number("")); // 0
// when  string contain non-numaric Vlaue it return Nan
 console.log(Number("3hello")); // Nan

 // when empty string passes to parseInt it return Nan
 console.log(parseInt("")); // Nan
 console.log(parseFloat("")); // Nan

 // when the String value conatain numaric with some character it return the numaric value it read the data from the left to right when the non numaric value comes it stops the conversion and  return the value
 console.log(parseInt("3hello"));
 console.log(parseFloat("3hello"));

 /* 
 Number() is best for general-purpose conversion of strings to numbers, including floating-point numbers.
 
parseInt() is best for extracting integers from strings, especially when dealing with mixed content or different numerical bases.
 
 */