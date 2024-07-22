/* reverse a case */
function reverseCase (str) {
    let result = "";
    for(let ele of str){
        if(ele == ele.toUpperCase()){
            result = result.concat(ele.toLowerCase());
        }else{
            result = result.concat(ele.toUpperCase());
        }
    }
    return result;
}
console.log(reverseCase("Hello"));
console.log(reverseCase("Happy Birthday"));