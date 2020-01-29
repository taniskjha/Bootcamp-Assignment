// Write a program to find area and circumference of circle


var readlineSync = require('readline-sync');

var question = Number(readlineSync.question('enter the circle radius'))

function findArea(question) {

    return Math.PI * Math.pow(question, 2) 
    
} findArea(50);