//  Memory Hierarchy - Os

/*
stack segment - Temp memory
Heap Segment - On-Demand memory (Dynamic Memory Allocation) 
Code Section - 
Data Section -

// Deep Tech: AI/ML BC IOT DS
   Relying Open Tech - Web Apps.

*/

// Inheriting by constructor function

function Family(father, mother, wife, daughter, sister) {
    this.father = father;
    this.mother = mother;
    this.wife   = wife;
    this.daughter = daughter;
    this.sister  = sister;
    
} 


function family2(father, mother, wife, daughter, sister) {
   // inheritence by call method

  Family.call(this, father, mother, wife, daughter, sister)
  this.brother = brother;  
} 

Family2.prototype = Object.create(Family.prototype);


// Inheriting from a constructor with no parameters


function Family() {
    this.wife = 'sara';
    this.son = 'ron';
}

function Family2() {
    Family.call(this);
    this.daughter = 'lara';
}


const jocky = new Family();

const jon = new Family2();

console.log(jocky);
console.log(jon);


//......................Ends...............................//




// Giving Family2() a new greeting() function

Family2.prototype.greeting = function() {
    
}