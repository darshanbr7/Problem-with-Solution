 /*  find a duplicate in a word if the letter is repeated then output will be false or true */
 
 function findDuplicates( str ){
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



