/* Create a function that need to accept a character and the that need to convert to lowerCase and vice versa than it need to return the charCode */

function counterpartCharCode (ele) {
    if( ele === ele.toUpperCase()){
      
   return  ele.toLowerCase().charCodeAt()
    }else{
    return  ele.toUpperCase().charCodeAt()
    }
  }
 
 console.log( counterpartCharCode("A"));
 console.log( counterpartCharCode("a"));