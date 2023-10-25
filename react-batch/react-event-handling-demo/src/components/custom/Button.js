import React from 'react'

const Button = (props) => {
    console.log('Button component is executed!');
  return (
    <button type="button" onClick={props.eventHandler} className="btn btn-primary btn-sm">{props.children}</button>
  )
}

export default Button
