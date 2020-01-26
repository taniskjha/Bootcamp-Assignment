// Write a program to classify the triangles equilateral,isosceles and scalene to the given sides of triangle.

function triangleArea(angle1, angle2, angle3) {
    

    if (angle1 == angle2 && angle2 == angle3) {
        return 'equilateral'
    } else if (angle1 == angle2 || angle1 == angle3) {
        return 'isosceles'
    } else if (angle1 !== angle2 && angle2 !== angle3) {
        return 'scalene'
    } 

} triangleArea(60, 60, 60)
