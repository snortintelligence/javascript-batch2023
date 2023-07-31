/**
 * Closures in Event Handlers:
 *  Closures are frequently used in event handlers to retain access to variables 
 *  even after the event handler function is created and executed.
 *
 */

/**
 *  we have a function called counter() that returns another function called handleCount(). This is an example of a closure in JavaScript.
 * In the provided code, we have a function called `counter()` that returns another function called `handleCount()`. This is an example of a closure in JavaScript.

        1. The `counter()` function:
        - The `counter()` function is defined with a local variable `count` initialized to `0`.
        - Inside `counter()`, there is another function called `handleCount()`, which increments the `count` variable by one and logs the updated count to the console.
        - `handleCount()` is a closure because it "closes over" the `count` variable from its outer function `counter()`.

        2. Returning `handleCount` as the result of `counter()`:
        - The `counter()` function returns the `handleCount` function, allowing it to be assigned to a variable.

        3. Creating instances of `count` and invoking it:
        - After calling `let count = counter();`, `count` will now refer to the `handleCount` function returned by `counter()`.
        - By calling `count();`, the `handleCount` function is executed, and it increments the `count` variable from the outer `counter()` function.
        - Since the closure retains access to the `count` variable even after `counter()` has finished executing, it remembers the previous value 
            of `count`, and each time `count()` is called, it will increment and log the count accordingly.
 * 
 * @returns function returns the `handleCount` function
 * 
 */

function counter(){
    let count = 0
    function handleCount(){
        count++;
        console.log(`\nClick count is ${count}`);
    }
    return handleCount;
}

//above function can be written like this also
function counter(){
    let count = 0
    return function handleCount(){
        count++;
        console.log(`\nClick count is ${count}`);
    }
}

let count = counter();
count = counter();
count();
count();
count();
