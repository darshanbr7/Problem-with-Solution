/*  count the number of vowels in the string  */

function countString(str) {
  // creating  a variable that conatin a all vowels
  let vowels = "aeiouAEIOU";
  // create a count variable and set 0 as a initial value
  let count = 0;
  // iterate a string using for loop
  for (let i = 0; i < str.length; i++) {
    // using includes method as a checking condition  increare the counte value
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  console.log(count);
}

countString("usernot found")
