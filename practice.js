/*  function findDuplicates( str ){
    let letterSet = new Set();
    let status = true;
    for (let ele  of str){
        if(letterSet.has(ele)){
            status = false;
            break;
        }else{
            letterSet.add(ele);
        }
    }
    return status;
    }

console.log(findDuplicates("abcd"));
console.log(findDuplicates("aba")); 
console.log(findDuplicates("hello")); 

 */

let arr = [ 10, 20, 30, 40, 50, "user"];
console.log(arr.indexOf("user"));