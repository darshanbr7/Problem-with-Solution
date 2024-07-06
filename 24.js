/* how to find the  intersection of the two array in javascript */

/* 
intersection -- the element which is present in both array  
*/

function findIntersection (arr1, arr2){
    /*  in filter method  passing element that will check the element in second array using indexOf( method) */
    let commonElement = arr1.filter((ele) => arr2.indexOf(ele) > -1)
    console.log(commonElement);
}
findIntersection([1, 4, 9 ,10], [2, 10, 4])