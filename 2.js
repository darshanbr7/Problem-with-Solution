/* what is the out put of the following code */
(function () {
   // here a is a block scope elemenet hence we con't acees out side of the scope 
   var  a = b = 36;
});
console.log("a " + typeof a);
console.log("b " + typeof b);
/*  Here inside an a function a is block schope hence it going to return Undefined value */
