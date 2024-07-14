const source = "bangalore", destination = "mysore", distance = 140, time = "3 hours and 30 min";

// earlier 
console.log("The distence between " + source +" and "+ destination + " is "+ distance +" and time taken is "+time +"." );

// this is the ES6 - using templet litteral
console.log(`The distance between ${source} to ${destination} is ${distance} and the time taken is ${time}.`); 