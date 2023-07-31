/** 
 * @Question What are the different data types in JavaScript? Give examples of each.
 * @explanation What are the different data types in JavaScript? Give examples of each.
 *              1. @Primitive Data Type :: Number {initeger, float} , String, Boolean, Null, Undefined, Symbol
 *              2. @Object Data Type :: Objects are complex data types that can hold key-value pairs and methods.
 *              3. @Function Data Type :: Functions are a subtype of objects but can be executed. They can be defined using function expressions or function declarations.
 *              
 *  @notes : JavaScript is a dynamically typed language, meaning you don't need to explicitly declare the data type of a variable; 
 *           it is determined automatically based on the value assigned to it.
 * */


/** 
 * @Primitive Type
 * 1. @Number {initeger, float} :  Represents numeric values, including integers and floating-point numbers.
 */

let quantity = 1
let price = 20.30
console.log("quantity:", quantity, ', type is ', typeof quantity)
console.log("price:", price, ', type is ', typeof price)

/**
 * @Primitive Type
 * 2. @String  Represents a sequence of characters enclosed in single ('') or double ("") quotes.
 * 
 */
let product = 'Candy'
let message = 'Welcome'

console.log("product:", product, ', type is ', typeof product)
console.log("message:", message, ', type is ', typeof message)

/**
 * @Primitive Type
 * 3. @Boolean : Represents a logical value, either true or false.
 * 
 */
let isPaid = true
let isReceived = false

console.log("is Paid:", isPaid, ', type is ', typeof isPaid)
console.log("is Received:", isReceived, ', type is ', typeof isReceived)

/**
 * @Primitive Type
 * 4. @Null Represents the intentional absence of any object value.
 * 
 */

let employeeName = null; // declare a variable without assigning it a value
console.log("employeeName:", employeeName, ', type is ', typeof employeeName)

/**
 * @Primitive Type
 * 5. @Undefined : Represents a variable that has been declared but not assigned any value.
 * 
 */

let personData;
console.log("personData:", personData, ', type is ', typeof personData)

/**
 * @Primitive Type
 * 6. @Symbol : Introduced in ECMAScript 6 (ES6), it represents a unique and immutable value that can be used as an identifier 
 * for object properties.
 * 
 */
// Adding a description to a Symbol (for debugging purposes)
let id = Symbol("uniqueID");
console.log('id : ', id);
console.log(id.toString()); // Output: 'Symbol(uniqueID)'

/**
 * 2. @Object Type
 * e. @Object : Objects are complex data types that can hold key-value pairs and methods.
 * 
 */

let employee = {
    [id]: 'ui897987',
    name: 'Aman',
    gender: 'M',
    skill: ['Fullstack Developer', 'nodejs'],
    salary: 75000.0,
    isActive: true,
    getName: function () {
        return this.name;
    },
    getGender: function () {
        return this.gender;
    }
    ,
    getsalary: function () {
        return this.salary;
    },
    getId: function () {
        return [id];
    }
}
//accessing object
console.log(employee);
console.log(employee[id]);
console.log(employee['name']);
console.log(employee.getsalary());

// Iterating over object properties
for(const key in employee){
    console.log(`\nemployee key :: ${key}`);
}

// Getting all symbol properties of an object
const symbolKeys = Object.getOwnPropertySymbols(employee);
console.log(symbolKeys); // Output: [ Symbol(), ... ]

/**
 * 3. @Function Type
 * e. Functions are a subtype of objects but can be executed. They can be defined using function expressions or function declarations.
 * 
 */

// Function Expression
let add = function (a, b) {
    return a + b;
}
console.log('\nadd : ', add(1, 2));

function greet(name) {
    console.log(`\nHello, ${name}!`);
}
greet('Vishu');




