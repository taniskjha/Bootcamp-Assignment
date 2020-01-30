// Regular expressions are patterns used to match character combinations in strings

let re;

re = /hello/; 


//.................Evaluation-Of-Function.................//


// exec() - It returns the result in array if that is a match or else it returns null

const result = re.exec('Hello world') // output - Matches
const result = re.exec('Hi world') // output - Null

console.log(result) // print the result
console.log(result[0]) // print firsr value in result
console.log(result.index) // gives you index value
console.log(result.input) // gives you search string

//....test returns true or false if there's a match.......//
const result = re.test('Hello') 
console.log(result); // Returns false because upperCase 'H'

// solution of Problem above 

let re = /hello/i;  // i makes hello Case insensetive
const result = re.test('Hello') 
console.log(result); // output returns true this time

// search() - Works simmilar to indexOf method it returns index of the firstElement it matches if not found it returns -1

const str = 'Hello there'
const result = str.search(re);
console.log(result) // Output is 0

// replace() - return new string with some or all matches of pattern 

const str = 'Hello there'
const newStrResult = str.replace(re, 'hi');
console.log(newStrResult) // Expected output 'hi there'



