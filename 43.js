/*  default parameter in js
 */

function greeting( hi){
    console.log(` hello ${hi}`);
}

greeting("darshan"); // hello darshan
greeting(); // hello undefined

// to avoid undefied in js we are using the default value  and  short curting

// shortcurting
 function greet(say){
    return ` Hi ${say  || "friend"} `
 }
 console.log(greet("darshan")); // hi darshan
 console.log(greet()); // hi friend

 // default parameter
  function greets ( name = "darshan"){
    return `Hi ${name}`
  }
 console.log(greets("raju")); // hi raju
 console.log(greets()) // hi darshan