const axios = require('axios');

// adding 3 numbers remotely

let resultX, resultY, resultZ;

function dad(num1, num2) {
    return new Promise((resolve,reject) => {
     axios.get(`http://192.168.0.138:8080/sum/${num1}/${num2}`) 
    .then((response) => resolve(response.data))
    .catch((err) => console.log(err))
})}

dad(2,3)
.then(x => {
    resultX = x;
    console.log(resultX)
    return dad(resultX, 5)
})
.then(x => {
    resultY = x;
    return dad(resultY, 6)
})
.then(x => {
    console.log(x);
})
