//...................LET.................................//

// let allows you to declare variables that are limited to a scope of a block statement, or expression on which it is used.

function whatLetDo() {
    let b = 10;
    {
      let b = 20;  

      console.log(b); 
    }
    console.log(b);  
  }

// Lets Call the function WhatLetDO

whatLetDo()

// Expected Output 10 
// Expected Output 20 


//......................Var...................................//

// var declares the value

function whatVarDo() {
    var b = 10;
    {
      var b = 20;  

      console.log(b); 
    }
    console.log(b);  
  }

// Lets Call the function WhatVarDO

whatVarDo()

// Expected Output 20 
// Expected Output 20 

//....................Const................................//

// its more like let because it is also block scoped but with one twist we can't reassign or redeclare the value of constant

function whatConstDo() {
    const b = 10;
    const b = 'Hey Dont reassign me'
  }

// Lets Call the function WhatConstDO

whatConstDo()

// Expected Output 
// Identifier 'b' has already been declared


