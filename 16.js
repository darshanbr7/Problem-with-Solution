// defference between shallow copy and deep copy

// creating an object 
const person = {
    name : "raju",
    age : 47,
    address :{
        place : "bolare",
        state : "karnataka"
        }
}

// for shallow copy -- the object is still is connected to the original object 
//  In shallow copy we are using Object.assign() , [...] mehod is used
// in shallow copy object is copied that sill is referencing same object
const shallowCopy = Object.assign(person);
shallowCopy.address.place = "Kowdly";
// if we change the value in shallow copy object that value is also changed in original object


const person1 = {
    name : "ramu",
    age : 47,
    address :{
        place : "bolare",
        state : "karnataka"
        }
}

//in deep copy we are using JSON.parse() and JSON.strigify() method
// in deep copy object is also copied and that is referencing  diffece 
const deepCopy = JSON.parse(JSON.stringify(person));


deepCopy.address.place = "Mandya";
console.log(person);
console.log(deepCopy);
