document.getElementById('button').addEventListener('click', loadData);

// We have an event listener we click it to call this function load data.

function loadData() {
  console.log('1')
  // create an xhr Object

  const xhr = new XMLHttpRequest();

//we want to read the file by get request then data.txt is what we're reading
  
  // open
  xhr.open('GET','data.txt', true);

  // When everything is ready it's going to call this onload and we want to make sure it's a status of 200


  xhr.onload = function(){	
    console.log('READYSTATE', xhr.readyState);	
    if(this.status === 200 ) {	
      // console.log(this.responseText);	
      document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`;	
    }	 
  }


// display   
  xhr.onerror = function() {
    console.log('Request error')
  }
// finally we have to do send for to actually send to make it work

  xhr.send();
}




// readystate value 
// o- request not initialized
// 1- server connection established
// 2- request recieved 
// 3- processing request
// 4- request finished is ready 
