let re;

// literal character

re = /hello/;
re = /hello/i; 

// Metacharacter ^ symbol makes sure it must start with that character declared

re = /^h/i; 

// Metacharacter $ symbol makes sure it must ends with that character declared

re = /hello$/i;

// Metacharacter $ and ^ symbol makes sure it must starts and ends with that character declared

re = /^hello$/i;

// Metacharacter . matches any character 

re = /h.ello/i;  

// Metacharacter * matches any character 0 or more

re = /he*llo/i; 

// Metacharacter ?s? makes it optional

re = /he?l?lo/i;

// Metacharacter escape \? Character makes 

re = /he?l?l\?o/i;


// Log results 

const result = re.exec(str);
console.log(result)

//....................Test Case............................//

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matched ${re.source}`)
    }  else {
        console.log(`${str} did not matched ${re.source}`)
    }
} reTest(re, str)