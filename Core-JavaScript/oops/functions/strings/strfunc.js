// String slice(): Returns a portion of the string between the specified start and end indexes (end index is exclusive).
const msg1 = 'Hello, World!';
const slicedStr = msg1.slice(0, 5);
console.log(slicedStr); // Output: Hello

//String substring(): Returns a portion of the string between the specified start and end indexes (end index is exclusive). 
let substringStr = msg1.substring(7, 12);
console.log(substringStr); // Output: World
//If the start index is greater than the end index, the method will swap them.
substringStr = msg1.substring(12, 7);
console.log(substringStr); // Output: World
