/* 1.write a javascript progaram which is return an array  that conatin only unique element */

/* One method using set method - that elemenate duplicate element's of an array */
function uniqueArray(data) {
  let newArray = new Set(data);
  console.log(newArray);
  return newArray;
}
uniqueArray([1, 1, 2, 3, 5, 6, 7]);
uniqueArray([1, 1, 2, 3, 1, 1, 7, 85, 6, 7]);

