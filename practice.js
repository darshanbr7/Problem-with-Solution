/* let user1 = { name : "darshan", age : 21};
let user2 = user1;
user2.age = 22
console.log(user1); */

let user3 = {name : "raju", age : 47}
let user4 = Object.assign({},user3);
let user5 = Object.assign(user3);
user4.place = "bolare";
user4.age = 48;
console.log(user3);
console.log(user4);