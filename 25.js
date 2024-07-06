/*  find the union of the two arrays */
/* 
 union  --  which is a comman in the both array
 */

  function findUnion (arr1, arr2) {
    let unionElement = new Set([...arr1, ...arr2 ])
    console.log(unionElement);
  }

  findUnion([10, 20, 46, 11, 24], [20, 39, 20, 45])