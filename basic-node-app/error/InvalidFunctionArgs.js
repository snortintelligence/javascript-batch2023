function userNameToUppercase(name) {
        if (typeof name !== 'string') {
                throw new Error('Invalid argument : value must be a string type!');
        }
        return name.toLocaleUpperCase();
}

console.log(userNameToUppercase('aman'));

//console.log(userNameToUppercase(123));

function calculateSquareRoot(number) {
        if (typeof number !== 'number' || number < 0) {
                throw new Error('Invalid argument: Number must be a non-negative numeric value');
        }
        return Math.sqrt(number);
}

calculateSquareRoot('2');
