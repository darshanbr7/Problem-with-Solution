/*  count the number of vowels in the string  */

function countString(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  console.log(count);
}

countString("usernot found")
