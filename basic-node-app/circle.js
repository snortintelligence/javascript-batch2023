
/**
 * Understanding Modules and the CommonJS Pattern
 * 
 * The CommonJS pattern is commonly used in Node.js environments to structure code into reusable modules.
 * Create it use it
 */

const PI = 3.14159;  // Private constant
module.exports = {
    calculateCircleArea : (radius)=>{
        return PI * radius * radius;
    },
    calculateCircumference : (radius)=>{
        return 2*PI*radius;
    }
}//end of the module 