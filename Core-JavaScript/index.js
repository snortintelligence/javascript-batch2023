// var keyword example 1 : 
// Variables declared with `var` can be redeclare and reassigned.
//If `var` is used outside any function, the variable becomes globally scoped. 
var x = 10
console.log("value of x : ",x);
var x = 20; //reassigns the same 'x' variable.
console.log("value of x : ",x);

// var keyword example 2 : `var` are function-scoped, meaning they are only accessible within the function they are declared in.
function sum1(){
    var x = 10;
    var y = 20;
    var z = x + y;
    console.log(" z = ",z);
}

sum1();
//accessing var y outside of sum function
//console.log("value in y = ",y); //-- ReferenceError: y is not defined

function sum2() {
    var x = 10;
    var y = 20;
    if(true){
    var z = x + y;
    }
    console.log(" z = ",z);
}
sum2();

