console.log('Starts');

function userNameToUppercase(name) {
        if (typeof name !== 'string') {
                throw new Error('Invalid argument : value must be a string type!');
        }
        return name.toLocaleUpperCase();
}

try {
        console.log(userNameToUppercase(123)); 
} catch (error) {
        console.error('error : ',error.message);
}

function calculateSquareRoot(number) {
        if (typeof number !== 'number' || number < 0) {
                throw new Error('Invalid argument: Number must be a non-negative numeric value');
        }
        return Math.sqrt(number);
}


try {
        calculateSquareRoot('2');
} catch (error) {
        console.error('error : ',error.message);
}

console.log('Ends');