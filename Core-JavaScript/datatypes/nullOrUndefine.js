/** 
 * @Question Explain the difference between `null` and `undefined` in JavaScript.
 * @explanation In JavaScript, both null and undefined represent the absence of a value, but slightly different in use. 
 *              @null is a primitive value in JavaScript, and it is used to explicitly represent the absence/empty of any object value. 
 * 
 * */ 
let personData = null;
console.log(personData);
console.log(typeof personData); 

/** 
 * @Question Explain the difference between `null` and `undefined` in JavaScript.
 * @explanation In JavaScript, both null and undefined represent the absence of a value, but slightly different in use. 
 *              @undefined  is a primitive value that is automatically assigned to variables that have been declared but 
 *              not initialized with any value. When you declare a variable without assigning it a value, 
 *              it will be initialized with undefined by default. 
 * 
 * */ 

let employeeName; // declare a variable without assigning it a value
console.log(employeeName);
console.log(typeof employeeName);

/**
 * @Suggestion When you encounter null or undefined while working with variables or functions, 
 * it is crucial to handle them appropriately to prevent unexpected behavior in your code. 
 * For example, you might want to check if a variable is null or undefined before performing certain 
 * operations to avoid errors.
 * 
 */