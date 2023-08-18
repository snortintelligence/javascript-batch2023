
/**
 * This indicates that the division operation 10 / 0 results in positive infinity. 
 * It's important to note that dividing by zero is mathematically undefined, 
 * but JavaScript uses Infinity and -Infinity to represent these cases.
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */

//Case 1
const div = (a,b)=>{
    return a/b;
}
console.log('div : ',div(10,2));
console.log('div : ',div(10,0));
console.log('div : ',div(10,-0));

//Case 2
const numbers = [1, 2, 3];

// This won't throw an exception; it will simply return undefined
const value = numbers[3];
console.log('array value[] : ',value);


