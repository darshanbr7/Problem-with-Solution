const person = {
    name : "raju",
    age : 47,
    address :{
        place : "bolare",
        state : "karnataka"
        }
}

//
const shallowCopy = Object.assign(person);
shallowCopy.address.place = "Kowdly";


const person1 = {
    name : "ramu",
    age : 47,
    address :{
        place : "bolare",
        state : "karnataka"
        }
}

const deepCopy = JSON.parse(JSON.stringify(person));


deepCopy.address.place = "Mandya";
console.log(person);
console.log(deepCopy);
