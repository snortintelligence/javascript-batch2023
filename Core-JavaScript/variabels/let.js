let a = 90;
console.log(a);

// In JavaScript, function declarations are hoisted, which means that the second function definition with the same name is replacing the first one. As a result, the second version of the function is the one being executed, and the first version is never called.
function exampleLet1() {
    let y = 30;
    if (true) {
      let y = 40; // This creates a new 'y' variable that shadows the outer one.
      console.log(y); // Output: 40
    }
    console.log(y); // Output: 30 (the outer 'y' remains unchanged)
  }
  
  exampleLet1();

  console.log("reassigns value of y");
  function exampleLet2() {
    let y = 30;
    if (true) {
      y = 40; // reassigns
      console.log(y); // Output: 40
    }
    console.log(y); // Output: 30 (the outer 'y' remains unchanged)
  }
  
  exampleLet2();



