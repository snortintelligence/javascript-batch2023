// `const` (Block-scoped, read-only):
//    - Variables declared with `const` are block-scoped like `let`, but they cannot be reassigned once their value is assigned.
//    - However, for objects and arrays, the properties or elements can be modified even though the variable itself cannot be reassigned.
function exampleConst() {
    const z = 50;
    if (true) {
      // Error: Assignment to constant variable.
      // z = 60;
      const innerConst = { prop: "Hello" };
      innerConst.prop = "World"; // Valid: modifying the property of the object.
      console.log(innerConst.prop); // Output: "World"
    }
    console.log(z); // Output: 50 (the 'z' variable remains unchanged)
  }
  
  exampleConst();


  function exampleConst2() {
    const z = 50;
    if (true) {
      // Error: Assignment to constant variable.
      // z = 60;
      const innerConst = { prop: "Hello" };
      innerConst.prop = "World"; // Valid: modifying the property of the object.
      console.log(innerConst.prop); // Output: "World"
    }
    console.log(z); // Output: 50 (the 'z' variable remains unchanged)
    console.log(innerConst.prop);
  }
  
  exampleConst2();