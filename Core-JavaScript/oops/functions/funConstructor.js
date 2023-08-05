//funConstructor
// Although not recommended due to security and performance reasons, you can create a function using the Function constructor:

/**
 * Function constructor to create functions from strings is generally not recommended, 
 * as it poses security risks due to potential code injection vulnerabilities. 
 * Additionally, using the Function constructor is less efficient compared to 
 * regular function declarations or function expressions.
 * 
 */

const greeting = new Function(console.log('Hi there!'));
greeting();

const sayHello = new Function('name','console.log(`Hello, ${name}`);');
sayHello('Sumit');

const sum = new Function('a','b', 'return a+b;');
console.log('sum = ',sum(10,2));

