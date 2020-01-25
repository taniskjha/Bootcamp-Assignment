// 3) Write a program to decide given N is Prime or not.


function prime(n) {
  for (var i=2; i < n; i++) {
    if (n % i ==0) {
      return 'its not prime'
    }
  } 
 return 'its prime'
 }
 prime(11)