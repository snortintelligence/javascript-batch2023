// Superclass: Shape
class Shape {
    constructor() {
      this.name = "Shape";
    }
  
    // Method to calculate area (to be overridden by subclasses)
    calculateArea() {
      return 0;
    }
  }
  
  // Subclass: Circle
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.name = "Circle";
      this.radius = radius;
    }
  
    // Method overriding: Calculate the area of the circle
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Subclass: Rectangle
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.name = "Rectangle";
      this.width = width;
      this.height = height;
    }
  
    // Method overriding: Calculate the area of the rectangle
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  // Function that uses polymorphism
  function printArea(shape) {
    console.log(`Area of ${shape.name}: ${shape.calculateArea()}`);
  }
  
  // Create objects of different classes
  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);
  
  // Call the function with different objects (polymorphism in action)
  printArea(circle);     // Output: Area of Circle: 78.53981633974483
  printArea(rectangle);  // Output: Area of Rectangle: 24
  