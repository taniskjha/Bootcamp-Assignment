const axios = require('axios')

function dad(num1,num2) {
    return new Promise((resolve,reject) => 
    
    axios.get(`http://192.168.0.138:8080/sum/${num1}/${num2}`)
    .then(response => resolve(response.data))

    )
}

function mom(num1,num2) {
    return new Promise((resolve,reject) => 
    
    axios.get(`http://192.168.0.138:8080/sum/${num1}/${num2}`)
    .then(response => resolve(response.data))

    )
}

// consuming the above two functions by wrapping in try catch block 

async function total() {
    
try{
    let resultDad = await dad(2,3);
    let resultMom = await mom(resultDad,10);
    console.log(resultMom);
}   
catch(err) {
    console(err);
}

}

total();
