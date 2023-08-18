/**
 * Create custom error classes that inherit from the Error object for different error types
 * 
 * you can create custom error classes by extending the built-in Error class. 
 * This allows you to define specific types of errors with custom properties and behavior. 
 * Custom error classes are helpful for organizing and handling different types of errors in a more structured way.
 * 
 */

class LoginError extends Error {
    constructor(message){
        super(message);
        this.error = 'LoginError';
    }
}

const users = [
    { userId: 101, username: 'aman101', password: '***' },
    { userId: 102, username: 'varun102', password: '****' },
    { userId: 103, username: 'himesh103', password: '**' }
];


const login = (username, password) => {
        const isLogin = users.filter((user)=>user.username === username && user.password === password)[0];
        if(!isLogin) throw new LoginError('Username or password is incorrect!');
        console.log(isLogin);
}

login('aman1011','***');