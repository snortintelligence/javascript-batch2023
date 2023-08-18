const users = [
    { userId: 101, username: 'aman101', password: '***' },
    { userId: 102, username: 'varun102', password: '****' },
    { userId: 103, username: 'himesh103', password: '**' }
];


const login = (username, password) => {
        const isLogin = users.filter((user)=>user.username === username && user.password === password)[0];
        if(!isLogin) throw new Error('Username or password is incorrect!');
        console.log(isLogin);
}

login('aman101','***');