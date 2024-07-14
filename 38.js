// how to compare the two object in javascrpt
/* 
  in this  line of the code console.log(  obj1 === obj2 );
  here  in this line code this is  going to compare object reference  hence   it return the false

  console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
  // in this line code fist it is convert object to string and then it  going to compare 
*/

function comapreObject ( obj1, obj2 ) {
  console.log(  obj1 === obj2 );
  console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
}
const obj1 = {
    a : 1,
    b : {
        c : 2
    }
}

const obj2 = {
    a : 1,
    b : {
        c : 2
    }
}
comapreObject( obj1, obj2);
