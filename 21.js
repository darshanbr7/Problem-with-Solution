/* write a program to merge two array and sort  them */

function mergeArray (arr1, arr2){

    //  to merge an array we are using two methods

    /* 
        1. using ... method to copy the two arrays 
        2. concat method 
    */
    /* let mergedArray = [...arr1, ...arr2].sort();
    console.log(mergedArray); */

    let mergedArray = arr1.concat(arr2);
    mergedArray.sort();
    console.log(mergedArray);
}
mergeArray([1,9,8,9], [8,0,2,6])