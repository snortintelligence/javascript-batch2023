/** 
 * Describe the concept of @closures in JavaScript and provide an example.
 * 
 * @Closures : When a function is defined inside another function, it creates a closure. 
 *            Closures are often used to create private variables and data encapsulation, 
 *            as they enable you to control access to certain variables, preventing direct 
 *            modification from outside the function.
 * 
 * Here's a step-by-step explanation of closures:
 * 
 * 1. @Lexical Scope: JavaScript has lexical scoping, which means that functions are aware of the variables 
 *    and functions defined in their containing scope (enclosing scope) and all parent scopes.
 * 
 * 2. @Function Definitions: When a function is defined inside another function, it creates a closure. 
 *      The inner function captures and retains access to its parent function's variables and scope, even after
 *      the parent function has completed execution.
 * 
 * 3. @Returned Function: If the inner function is returned from the outer function and assigned to a variable or used as a callback, 
 *      it carries the closure with it, allowing it to still access the variables and scope of the outer function.
 * 
 *  
 *  @ImportantNotes : they are extensively used in more complex scenarios, such as in event handlers, 
 *  callbacks, and maintaining state in functional programming paradigms. Closures provide an elegant way 
 *  to manage scope and preserve data, making JavaScript a versatile and expressive language. 
 * 
 */

//example 
function outerFunction(){
    let outerVariable = 'I am from outer Function'
    function innerFunction(){
        console.log(outerVariable); // innerFunction can access outerVariable due to the closure
    }
return innerFunction; // Returning innerFunction creates a closure
}

const closureFunction = outerFunction();
closureFunction();// Output: 'I am from the outer function'