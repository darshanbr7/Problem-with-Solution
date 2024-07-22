/*  write a program to find the single reapeated value in a array */

let arr = [10, 20, 30, 40, 10, 20, 0, 1];
let singleRepeated = [];
for( let ele of arr){
    if(arr.indexOf(ele) === arr.lastIndexOf(ele)){
        singleRepeated.push(ele);
    }
}
console.log(singleRepeated);