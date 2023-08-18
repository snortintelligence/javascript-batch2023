
function findUser(userId) {
    const users = [
        {userId: 101, name:'Aman'},
        {userId: 102, name:'Varun'},
        {userId: 103, name:'Himesh'}
    ];
    if(!userId){
            throw new Error('Missing Required Parameter : userId');
    }
    const user = users.filter(user=>user.userId===userId);
    return user;
}

try {
    console.log(findUser(null));
} catch (error) {
    console.error('error : ',error.message);
}