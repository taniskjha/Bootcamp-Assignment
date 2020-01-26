// Write a program to find power of a number using recursion

function power(a,b) {

    if (b == 0) {return 1} 

    return a * power(a, b-1)

}  power (3,2)