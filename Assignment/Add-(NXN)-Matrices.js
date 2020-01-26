//  Write a program to add and subtract of given (NXN) Matrices

let mar = [ [1,2,3], 
            [1,2,5],
            [5,6,7] ];


let first =  mar[0].reduce((a,b) => a + b) 
let second = mar[1].reduce((a,b) => a + b)
let third =  mar[2].reduce((a,b) => a + b) 

let sum = first + second + third;

console.log(mar);


