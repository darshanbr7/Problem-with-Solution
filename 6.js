/* find the vowels the string */

// crwating an string
let value = "usernotfound";

// creating a function  that accept a string as an argument
function findVowels(data) {
  // creating a new string  and assigning empty string as a value
  let newSting = "";

  // creating a string that contain all the vowels
  let vowels = "aeiouAEIOU";

  // iterating a string using for loop
  for (let i = 0; i < data.length; i++) {
    // using condition  statement putting a conditing vowels string includes(string method) for checking each element
    if (vowels.includes(data[i])) {
      // adding the vowels to a newstring  using concat menthod
      newSting = newSting.concat(data[i]);
    }
  }
  console.log(newSting);
}

// invocking an function
findVowels(value);
