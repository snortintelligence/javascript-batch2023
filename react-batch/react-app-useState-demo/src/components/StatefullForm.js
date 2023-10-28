import React, { useState } from 'react'

const StatefullForm = () => {

    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');

    const handleChange = (e) => {
        console.log('handleChange working...');
        setUsername(e.target.value); // This doesn't update the component
        console.log('inputValue : ',username);
    };
    console.log('outer inputValue : ',username);
    return (
        <div>
            Username : <input type="text" name='username' onChange={handleChange} />
            email : <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)} />
            <p>Your username: {username}</p> 
            <p>Your email: {email}</p>
        </div>
    )
}

export default StatefullForm
