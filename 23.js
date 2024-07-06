/* write  a program to   find the two arrays are same  are  not */
function matchArray (arr1, arr2){
    /* 
      while comaparing two arrays we are checking  length of the two array are same
      using every() of js it is  method executes a function for each array element.
      using indexOf() method we are comparing weather that element is existing in another array or not
       by using >  operator( if that element is present it return 1 else 0 )
     */
    let isArraySame = arr1.length == arr2.length && arr1.every((ele) => arr2.indexOf(ele) > -1)
    console.log(isArraySame);
}
matchArray([1, 2, 5, 9], [5, 9, 3, 1])