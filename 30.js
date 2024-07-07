/*  write a javascript program to find the largest  and  smallest  in 3 number */

function findGreatest (a,b,c){
    let maxium = Math.max(a,b,c)
    let minimum = Math.min(a,b,c)
    console.log(` maximun number is ${maxium} `);
    console.log(` minimum number is ${minimum} `);
    }
    findGreatest(10,20,30)