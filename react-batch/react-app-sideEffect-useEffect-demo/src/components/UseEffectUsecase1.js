import React, { useEffect, useState } from 'react'

const UseEffectUsecase1 = () => {

    //  is placed outside of the useEffect hook. This log statement runs every time the component is re-rendered, regardless of whether the state changes or not.
    console.log('Every time the component is re-rendered');
    let [page, changePage] = useState('Home');

    // solution : should use useEffect hook , It takes two arguments
    // void useEffect(()=>{ arg1: callback function }, [arg2: list of dependencies array]) 

    useEffect(()=>{
        // The callback function contains the code to be executed as a side effect, 
        // and the array of dependencies specifies when the effect should run. 
        // In this case, the effect runs whenever page changes, as it's listed in the dependencies array.
        console.log('inside useEffect - Page(state) changed : ',page);
    }, [page]);

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

export default UseEffectUsecase1
