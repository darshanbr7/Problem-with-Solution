const person1 = {
   name : "ramu",
   age : 47,
   address :{
       place : "bolare",
       state : "karnataka"
       }
}

let person2 = Object.assign({}, person1);
person2.address.place = "Kowdly"
console.log( person1.address.place );
console.log( person2.address.place );

console.log(" __________");

let person3 = JSON.parse(JSON.stringify(person1))
person3.address.place = "maddur"
console.log( person1.address.place );
console.log( person3.address.place );
