import React from 'react'

const handleOnChangeEvent = (e) => {
  console.log('handleOnChangeEvent : ',e.target.value);
}

const handleOnSubmitEvent = (e) => {
  e.preventDefault(); //don't reload page while submit data
  console.log('Form submitted...');
}

const FormSubmitEvent = () => {
  return (
    <div className="container-sm col-md-6">
      <h4>Form Submit Event</h4>
      <form onSubmit={handleOnSubmitEvent} style={{border: '1px solid green', padding: '2rem'}}>
        <div className="mb-3">
          <label htmlFor="exampleInputUsername" className="form-label">Username</label>
          <input type="text" className="form-control" id="exampleInputUsername" onChange={handleOnChangeEvent} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputParssword" className="form-label">Parssword</label>
          <input type="password" className="form-control" id="exampleInputParssword" onChange={handleOnChangeEvent} />
        </div>
        <button type="submit" className="btn btn-success btn-sm d-grid gap-2 col-6 mx-auto">Login</button>
      </form>
    </div>
  )
}

export default FormSubmitEvent
