console.log("Circle Data\n");
const circle = require('./circle');
console.log('circle Area => ',circle.calculateCircleArea(3));
console.log('circle Circumference => ',circle.calculateCircumference(3));

console.log("Rectangle Data\n");
const rectangle = require('./rectangle');
console.log('rectangle Area => ',rectangle.calculateRectangleArea(3,5));
console.log('rectangle Perimeter => ',rectangle.calculateRectabnglePerimeter(3,5));
console.log('rectangle Diagonal => ',rectangle.calculateDiagonal(3,5));