//.......................catch a refrence error...............//

try {
  callFunction();
}

catch(e) {
    console.log(e);

    console.log(e.message); // to get the error with message

    console.log(e.name); // to get the name of error

    console.log(e instanceof TypeError) // to test the type of error , expected Output will be false because this is a refrence error.
} 
finally {
        console.log('This finally will run regardless of result')
}

console.log('Keep executing the Program')


//......................Catch a type Error..................//

try {
   null.callFunction();
} 

catch {
  console.log(e);
}

finally {
    console.log('finally runs regardless of result')
}


//.....................catch a syntax error..................// 

try {
    eval('Hello stranger')
 } 
 
 catch {
   console.log(e);
 }
 
 finally {
     console.log('finally runs regardless of result')
 }


 //........................catch URI error..................// 


 try {
    decodeURIComponent('%')
 } 
 
 catch {
   console.log(e);
 }
 
 finally {
     console.log('finally runs regardless of result')
 }



 


