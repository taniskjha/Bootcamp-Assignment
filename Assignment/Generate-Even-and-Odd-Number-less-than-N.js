// 2) Write a program to Generate Even and Odd Number less than N and Generate ‘N’Even and Odd Numbers


function x(N) {
   
  for (var i =0; i<N; i++) {
     if(i % 2 === 0) {
        console.log(i + ' is even')
     } else {
        console.log(i + ' is odd')
     }
  }
  
} x(10)