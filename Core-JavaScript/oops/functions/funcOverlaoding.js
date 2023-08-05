/**
 * 
 * As you can see, the output is "5" for both cases, because the second sum function overwrites the first one, 
 * and the function simply returns the value of the single argument passed.
 * 
 */

function sum(a,b){
    return a+b;
}

function sum(name){
    return name;
}

console.log(sum(5, 5)); // Output: "5"
console.log(sum("Hello")); // Output: "Hello"