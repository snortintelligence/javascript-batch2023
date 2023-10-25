import React from 'react'

let openedWindowRef = null;

const openWindow=()=>{
    //open page in same the browser
    // window.open(); 
    // window.open('https://jwt.io/'); or window.open('https://jwt.io/', '_blank');
    // window.open('https://jwt.io/', '_parent');

    //open page in a saparte browser
    // window.open('https://jwt.io/', '_blank', 'width:500px; height:600px');
    openedWindowRef = window.open('https://jwt.io/', '_blank', 'width=500px; height=600px; top=4px; left=0px');

}

const closeWindow=()=>{
    openedWindowRef.close();
}

const WindowEvents = () => {
  return (
    <div>
       <button onClick={openWindow} type="button" className="btn btn-primary btn-sm">Open Window</button>
       {' '}
       <button onClick={closeWindow} type="button" className="btn btn-danger btn-sm">Close Window</button>
    </div>
  )
}

export default WindowEvents
