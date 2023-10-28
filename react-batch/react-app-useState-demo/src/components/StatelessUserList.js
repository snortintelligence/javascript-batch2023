import React from 'react'



const StatelessUserList = () => {

  const users = ['Aman', 'Nsihat', 'Somuya'];
  let newUser = ''

  const addUser = (newUser) => {
    users.push(newUser);
    console.log('new user added  : ', newUser);
  }

  const listJsx = () => {
    return (<ul className="list-group mt-4 col-4">
      {
        users.map((user, index) => (
          <li className="list-group-item list-sm" value={user} key={index}>{user}</li>
        ))
      }
    </ul>)
  }

  return (
    <div className='conatiner col-3 m-5'>
      <h4>User List</h4>
      <div className='mb-3'>
        <input className="form-control form-control-sm" type="text" placeholder="Please enter username" onChange={(e) => (addUser(e.target.value))} />
        <div className="d-grid gap-2">
          <button className="btn btn-sm btn-outline-success mt-1" type="button" onClick={() => console.log('')}>add new user</button>
        </div>
        <div className="d-grid gap-2">
          {
            listJsx()
          }
        </div>
      </div>
    </div>
  )
}

export default StatelessUserList
