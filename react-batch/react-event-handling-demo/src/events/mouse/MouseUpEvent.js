import React from 'react'

const handleMouseUpEvent=()=>{
    console.log('MouseHooverEvent working (on mouse leave right / left click)...');
}

const MouseUpEvent = () => {
    return (
        <div className="card" style={{width: '18rem'}} onMouseUp={handleMouseUpEvent}>
            <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default MouseUpEvent
