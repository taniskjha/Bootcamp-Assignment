// Create array of an object

const posts = [
    
    {title:'post one', body: 'This is post one'},
    {title:'post one ', body: 'This is post two'},

];

// create a function 

function getPosts() {

  setTimeout(() => {  // set timeout to delay the post
    
    let output = '';  // empty variable

    posts.forEach((post) => { // looping through forEach

     output += `<h1> ${post} </h1>`
    })

    document.body.innerHTML = output;

  }, 1000) // delaying the post by 1 sec
}
