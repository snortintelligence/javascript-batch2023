import React from 'react'

const StatelessForm = () => {

    let inputValue = '';

    const handleChange = (e) => {
        console.log('handleChange working...');
        inputValue = e.target.value; // This doesn't update the component
        console.log('inputValue : ',inputValue);
    };
    console.log('outer inputValue : ',inputValue);
    return (
        <div>
            Username : <input type="text" name='username' onChange={handleChange} />
            <p>You typed: {inputValue}</p> {/* Will not update */}
        </div>
    )
}

export default StatelessForm
