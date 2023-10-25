import React from 'react'

const handleKeydownEvent = (e) => {
  // Key pressed down
  console.log('handleKeydownEvent pressed : ',e.key);
}

const handleKeyUpEvent = (e) => {
  // Key released:
  console.log('handleKeyUpEvent released : ',e.key);
}

const KeyboardEvents = () => {
  return (
    <div className="container-sm">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputUsername" className="form-label">Username</label>
          <input type="email" className="form-control" id="exampleInputUsername" onKeyDown={handleKeydownEvent} onKeyUp={handleKeyUpEvent} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default KeyboardEvents
