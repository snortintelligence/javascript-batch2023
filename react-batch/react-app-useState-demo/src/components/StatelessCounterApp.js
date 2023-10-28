import React from 'react'

const StatelessCounterApp = () => {
  let counter = 0;
  let increment = () => {
    return ++counter;
  }

  let decrement = () => {
    return --counter;
  }
  return (
    <div>
      <span>counter status: {counter}</span><br />
      <button onClick={increment}>increment</button> {' '}
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default StatelessCounterApp
