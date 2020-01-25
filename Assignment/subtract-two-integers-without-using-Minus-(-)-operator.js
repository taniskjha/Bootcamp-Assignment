// Write a program to subtract two integers without using Minus (-) operator

function subtractWithoutMinus(a, b) {
  return a + (~b) + 1
} subtractWithoutMinus(5, 4)