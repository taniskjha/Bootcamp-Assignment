
function prime(n) {
  for (var i=0; i < n.length; i++) {
    if (n % i !== 0) {
      return i + 'its prime'
    } else {
      return 'its not prime'
    }
  } 
 
 } prime(25) 




