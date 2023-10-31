import React, { useEffect, useState } from 'react'

const UseEffectUsecase2 = () => {

    //  is placed outside of the useEffect hook. This log statement runs every time the component is re-rendered, regardless of whether the state changes or not.
    console.log('Every time the component is re-rendered');
    let [page, changePage] = useState('Home');

    useEffect(()=>{
        // This side eefect workd for one when the webpage render first time only
        console.log('inside useEffect - Page(state) changed : ',page);
    }, []);

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

export default UseEffectUsecase2
