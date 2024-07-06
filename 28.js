/*  write a program to print a * in right triangle , diamond  pyramid shape */


// program for diamond shape 
/* let n = 5; 
for (let i = 1; i <= n; i++) { 
    let str = "*"; 
    let space = ' '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
} 
for (let i = n - 1; i >= 1; i--) { 
    let str = "*"; 
    let space = ' '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
} */


  // program  to  piramid  
   /*  let n = 5;
    for (let i =1 ; i<= n; i++){
        let str = "*"
        let space = " ";
        console.log(space.repeat(n - i) + str.repeat(i * 2 -1 )) ;
    } */


        //  progarm to right triagle
    let n = 5;
    for (let i =1 ; i<= n; i++){
        let str = "*"
        let space = " ";
        console.log(  space.repeat(n - i) + str.repeat(i * 2 -1 ) ) ;
    }