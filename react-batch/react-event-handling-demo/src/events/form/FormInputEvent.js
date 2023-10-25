import React from 'react'

const handleOnChangeEvent = (e) => {
  console.log('handleOnChangeEvent : ',e.target.value);
}

const FormInputEvent = () => {
  return (
    <div className="container-sm col-md-6">
      <h4>Form Input Event</h4>
      <form style={{border: '1px solid green', padding: '2rem'}}>
        <div className="mb-3">
          <label htmlFor="exampleInputUsername" className="form-label">Username</label>
          <input type="email" className="form-control" id="exampleInputUsername" onChange={handleOnChangeEvent} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputParssword" className="form-label">Parssword</label>
          <input type="email" className="form-control" id="exampleInputParssword" onChange={handleOnChangeEvent} />
        </div>
        <button type="submit" className="btn btn-success btn-sm d-grid gap-2 col-6 mx-auto">Login</button>
      </form>
    </div>
  )
}

export default FormInputEvent
