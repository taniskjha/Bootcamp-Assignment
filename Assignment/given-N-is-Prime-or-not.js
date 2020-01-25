// 3) Write a program to decide given N is Prime or not.


function prime(n) {
 for (var i=0; i < n; i++) {
   if (n % i ==0) {
     return 'its prime'
   } else {
     return 'its not prime'
   }
 } 

} prime(11) 