/**
 * Inheritance in JavaScript is a mechanism that allows an object to acquire properties and methods from another object. 
 * JavaScript uses a prototype-based inheritance model, which is different 
 * from classical inheritance models found in languages like Java or C++. 
 * In prototype-based inheritance, objects inherit directly from other objects.
 * 
 * Each object in JavaScript has an internal property called [[Prototype]], which points to its prototype. 
 * The prototype is another object that the current object inherits properties and methods from.
 * 
 */


/**
 * using constructor function create a Person object
 * @param {id} id 
 * @param {name} name 
 * @param {livesIn} livesIn 
 */

//
function Person(id, name, livesIn){
    this.id = id;
    this.name = name;
    this.livesIn = livesIn;
}

// Adding a method to the Person prototype
Person.prototype.getPersonInfo = function(){
    console.log(`Hi there!, I am ${this.name} lives in ${this.livesIn}.`);
}

// Creating a new object using the Person constructor
const p1 = new Person(1,'Aman','Patna city')
p1.getPersonInfo();

// Override the sayHello method for person1
p1.getPersonInfo = function(){
    console.log('override method getPersonInfo()');
    console.log(`I am ${this.name} lives in ${this.livesIn}.`);
}
// Calling the sayHello method for person1
p1.getPersonInfo();

/**
 * In JavaScript, unlike some other programming languages, 
 * there is no built-in support for function overloading, 
 * where you can define multiple functions with the same name but different parameter lists. 
 * In JavaScript, a function can have only one name and one implementation.
 * 
 */