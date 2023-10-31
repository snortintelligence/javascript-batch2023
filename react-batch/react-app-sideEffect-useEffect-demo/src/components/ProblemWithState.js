import React, { useState } from 'react'

const ProblemWithState = () => {

    console.log('When state changed - Component rerender : ');

    let [page, changePage] = useState('Home');

    const handleChangePage = (resourcePage) => {
        changePage(resourcePage);
    }
    
    return (
        <div className='mt-5'>
            <button type="button" className='btn btn-primary btn-sm' onClick={() => handleChangePage('Home')} >Home</button>
            <button type="button" className='btn btn-primary btn-sm' onClick={() => handleChangePage('About')} >About</button>
            <button type="button" className='btn btn-primary btn-sm' onClick={() => handleChangePage('Contact')} >Contact</button>
           <h5> Current page : {page}</h5>
        </div>
    )
}

export default ProblemWithState
