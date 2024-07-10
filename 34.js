/*  The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation. */

function mathOperator (operator, value1, value2){
    if(operator == "+"){
        return value1 + value2;
    }else if( operator == "-"){
        return value1 - value2;
    } else if( operator == '*'){
        return value1 * value2;
    } else if(operator == "/"){
        return value1 / value2;
    } else{
        return "Operator is not defined";
    }
}

console.log(mathOperator('+', 4, 7));
console.log(mathOperator ('-', 15, 18));
console.log(mathOperator  ('*', 5, 5));
console.log(mathOperator ('/', 49, 7));