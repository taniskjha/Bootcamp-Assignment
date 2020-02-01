// “I recently failed in an assessment. Yes, the scary F word.

// But I don’t look at this failure as an anchor. I look at this as an opportunity for growth.”

// 3 months back my good old friend Nazim failed to understand prototypical Inheritance.

// Next day he called me and asked, Am i smart enough to be programmer?.

// Nazim and all aspiring developers, When its comes to learning difficult programming concept, Repetition Is the Key.

// So, Let’s dive deep on understanding what is Inheritance ?

// A lot of inheritance blog on internet uses all kinds of crazy examples with trees and babies to make you understand inheritance.

// I think it’s better just to directly say what inheritance does :-

// When You have an object, And you have another object, And when you can go and get access to the properties and methods on that other object it’s called Inheritance.

// Makes sense? If not, than you should first read my post on objects, 3 weird ways to create JavaScript objects (Learn my tricks Now)

// So far, we’ve talked about inheritance, Now let’s look at how prototypes are used to inherit functionality.

function PrintMyPassport (myPassport) {
this.documents = myPassport;
}
​
// We add the print () method to PrintMyPassport prototype property so that other instances (objects) can inherit it:
​
PrintMyPassport.prototype.print = function () {
console.log(this.documents);
}
​
// Create a new object with the PrintMyPassport () constructor, thus allowing this newPass object to inherit PrintMyPassport's properties and methods.
​
var newPass = new PrintMyPassport ("I am a new Object and I can print your passport.");
​
// newPass inherited all the properties and methods, including the print method, from the PrintMyPassport function. Now newPass can call print directly, even though we never created a print () method on it.
​
newPass.print (); //I am a new Object and I can print.
Let’s take a good look at another example:-

//  let's create a new function, I'll call it family
​
function family(father, mother, wife, daughter, sister) {
    this.father = father;
    this.mother = mother;
    this.wife   = wife;
    this.daughter = daughter;
    this.sister  = sister;
} 
// Now i'm going to create two object john and syam using new keyword.
​
const John = new family('rob', 'Margie', 'Alicia', 'Ellie', 'lara')
​
const Syam = new family('Nath', 'Seema', 'Sara', 'Priya', 'anita') 
​
console.log(John); 
​
// Expected Output of john :-
​
family { father: "rob", 
         mother: "Margie", 
         wife: "Alicia", 
         daughter: "Ellie", 
         sister: "lara" }
​
console.log(Syam); 
​
// Expected Output of syam:-
​
family { father: "Nath", 
         mother: "Seema", 
         wife: "Sara", 
         daughter: "Priya", 
         sister: "anita"}

// So, How the heck inheritance is happening in example above.

// After creating the function we have used new keyword at line 12 and 14 to create a new Object John and syam.

// And this variable inside function family is pointing to the newly created object john and syam.

// if you want to learn how this keyword works under the hood, read my post on this keyword This Keyword In JavaScript with 3 Easy Examples

// Since ECMAScript 2015 release, We can use Class based Inheritance In JavaScript, Which are primarily a syntactical sugar over JavaScript’s existing prototype-based inheritance.

// So, Now let’s look at another easy example of how ECMAScript classes are used to inherit functionality.

//  let's create a new class, I'll again call it family
​
class family {
  constructor(father, mother, wife, daughter, sister) {
  
    this.father = father;
    this.mother = mother;
    this.wife   = wife;
    this.daughter = daughter;
    this.sister  = sister;
}}
// Now i'm going to create two new object federico and jorge using new keyword.
​
const federico = new family('rob', 'Margie', 'Alicia', 'Ellie', 'lara')
​
const jorge = new family('Nath', 'Seema', 'Sara', 'Priya', 'anita') 
​
console.log(federico); 
​
// Expected Output of federico :-
​
family { father: "rob", 
         mother: "Margie", 
         wife: "Alicia", 
         daughter: "Ellie", 
         sister: "lara" }
​
console.log(jorge); 
​
// Expected Output of jorge:-
​
family { father: "Nath", 
         mother: "Seema", 
         wife: "Sara", 
         daughter: "Priya", 
         sister: "anita"}
         
// In the example above we have used the constructor method which is a special method for creating and initialising an object created within a class.

// I’ll repeat again, The class syntax does not introduce a new object-oriented inheritance model to JavaScript,

// its just a syntactical sugar over JavaScript’s existing prototype-based inheritance

// Closing Notes– If you like codeum.io and would like to contribute, you can also write an article by sending a mail to me at contact@taniskjha.com or alternatively you can Dm me on Facebook or Twitter too.

// See your article appearing on the codeum.io main page with over 10k Monthly Visitors and help other aspiring Developers.

// Thanks for reading,If you have any questions , please ask questions in the comments below.

// If this post was helpful, help me back by clicking the Share button.

// More Posts:-