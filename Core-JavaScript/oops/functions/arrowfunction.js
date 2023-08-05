// Arrow functions provide a shorter syntax for writing functions, especially for simple one-liners. 
//They automatically capture the context (this) from the surrounding code:

const greeting = ()=>{
    console.log('Hi there!');
}

const sayHello = (name)=>{
    console.log(`Hi ${name}`);
}

const sum = (a,b)=>{
    return a+b;
}

greeting();
sayHello('Aman');
const result = sum(10,2);
console.log('sum = ',result);