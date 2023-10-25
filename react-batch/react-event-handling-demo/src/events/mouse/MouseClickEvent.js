import React from 'react'

//Step 1. Creating a function
const handleMouseClickEvent=()=>{
    console.log('handleMouseClickEvent working...');
}

/**
 * If you call event func like onClick={handleClickEvent()} which would call the handleClickEvent function immediately 
 * when the component renders, instead of waiting for the click event. By removing the parentheses (), 
 *  
 */

const MouseClickEvent = () => {
  return (
    //Step 2. you are passing a reference to the function so that it will be called when the button is clicked.
    <button onClick={handleMouseClickEvent} type="button" className="btn btn-primary">Click Event</button>
  )
}

export default MouseClickEvent
