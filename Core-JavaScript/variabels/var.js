// `var` is not commonly used in modern JavaScript development due to its scope-related issues.
function getVarValue(){
    var x = 10;
    function getValue(){
        console.log('value x = '+x);
    }
    getValue();
    console.log(x);
}
getVarValue();

function getLetValue(){
    let x = 30;
    function getValue(){
        console.log('value x = '+x);
    }
    getValue();
    console.log(x);
}
getLetValue();

