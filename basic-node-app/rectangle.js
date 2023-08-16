/**
 * The CommonJS pattern is commonly used in Node.js environments to structure code into reusable modules.
 * Create it use it
 */

module.exports = {
    calculateRectangleArea: (length, width) => {
        return length * width;
    },
    calculateRectabnglePerimeter: (length, width) => {
        return 2 * (length + width);
    },
    // d = √(length^2 + width^2)
    calculateDiagonal : (length, width)=>{
         return  Math.sqrt(length ** 2 + width ** 2);
    }
}//end of the module 