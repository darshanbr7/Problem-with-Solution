//  no of accurence
function findSumEelement (str){
    let obj = {}
     for(let ele of str){
        (obj[ele]) ? obj[ele]++ : obj[ele] = 1
     }
     console.log( obj);
}
findSumEelement("hello")