document.getElementById('button1').addEventListener('click', loadCustumer);

function loadCustumer(e) {
  const xhr = new XMLHttpRequest

  xhr.open('GET', 'custumer.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText)
     
    const cust = JSON.parse(this.responseText); 
  
    // var output =''
    const output = `<ul>
    <li>ID: ${cust.id} </li>
    <li>Name: ${cust.name} </li>
    <li>company: ${cust.company} </li>
    <li>phone: ${cust.phone} </li>
    
    </ul>`;

    document.getElementById('custumer').innerHTML = output

    }
  }
  xhr.send();
}


