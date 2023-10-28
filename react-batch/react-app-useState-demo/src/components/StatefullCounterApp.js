import React, { useState } from 'react'

const StatefullCounterApp = () => {
  
  let [counter, changeCounter] = useState(0);
  let increment = () => {
    changeCounter(++counter);
  }

  let decrement = () => {
    changeCounter(--counter);
  }
  return (
    <div>
      <span>counter status: {counter}</span><br />
      <button onClick={increment}>increment</button> {' '}
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default StatefullCounterApp
