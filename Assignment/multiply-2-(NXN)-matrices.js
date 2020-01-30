// Write a program to multiply given 2 (NXN) matrices


var a = [ [1,2],
          [3,4] ];

var b = [
    [2,2],
    [3,4] ]

for (var i = 0; i < n; i++ ) {
    for(var j = 0; j < n; j++) {
       var m = [i][j] = 0;
        for (var k = 0; k< n; k++) {
            m[i][j] += a[i][k] * b[k][j]
        }
    }
}    

console.log(m)



function multiplyMatricees(a,b) {
  if (a.length !== b.length) {
      return 'This is not N*N matrices'
  }    for (i = 0; i < a.length; i++) {
      for (j= 0; j < b.length; j++) {
          var m = [i][j]

      }
  }


}



var obj1 = {
    a:1,
    b:2
}

var obj1 = {
    a:1,
    b:2
}








