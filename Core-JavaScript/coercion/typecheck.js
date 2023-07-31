/** 
 * Type coercion in JavaScript is the automatic conversion of one data type to another 
 * when values of different types are involved in an operation (such as comparison or arithmetic).
 * 
 * JavaScript is a dynamically typed language, which means that variables can hold values of any data type, 
 * and the language will attempt to perform operations between different types by converting them as needed.
 * 
 * Type coercion often occurs in situations where JavaScript expects values of a specific data type, 
 * but the actual values provided are of a different type. In such cases, JavaScript will 
 * try to convert one or both of the values to a compatible type before performing the operation.
 * 
*/


//1. String and Number Concatenation:
//concat operations
console.log('String and Number Concatenation');
console.log("5" + 5); 
console.log(5 + '5');

//2. Arithmetic operations
console.log('Arithmetic operations');
console.log("6" - 5); 
console.log(5 - '5');
console.log(5 * '5');
console.log(5 / '5');
console.log(5 % '5');

//3. comparison operations
console.log('Comparison operations');
console.log(5 == 5);    // true
console.log("5" == 5);  // true (due to type coercion)
console.log(5 == '5');  // true (due to type coercion)
console.log(5 == 6);    // false

console.log(5 == "5");   // true (The string "5" is coerced to the number 5 for comparison)
console.log(5 === "5");  // false (Strict equality does not perform type coercion)

//4. Logical Operators:
console.log('Logical Operators');
console.log(true + 1);   // 2 (true is coerced to 1 in this context)
console.log(false == 0); // true (false is coerced to 0 for comparison)


//5. Truthy and Falsy Values:
console.log("Truthy and Falsy Values");
console.log(5 || "hello");   // 5 (5 is a truthy value, so it is returned)
console.log(null || "world"); // "world" (null is a falsy value, so "world" is returned)


/**
 * 
 * Type coercion can lead to unexpected behavior and bugs in code if not handled carefully. 
 * To avoid these issues, it's generally recommended to use the strict equality operator (===) when comparing values, 
 * as it does not perform type coercion. Also, it's a good practice to be explicit about the types of variables and 
 * values to prevent unintended conversions. For example, you can use the parseInt() or parseFloat() functions to 
 * explicitly convert strings to numbers if required.
 * 
 */