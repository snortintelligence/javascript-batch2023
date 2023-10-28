import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const StatefullUserList = () => {

  const [users, setUsers] = useState(['Aman', 'Nsihat', 'Somuya']);
  const [newUser, setNewUser] = useState('');
  const [selectedRow, setSelectedRow] = useState(-1);

  const addUser = () => {
    if (newUser.trim() !== '') {
      setUsers([...users, newUser]);
      setNewUser(''); // Clear the input field
    }
  }

  const handleDelete = (index) => {
    const updatedUsers = [...users]; //copying users
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  }

  const handleSelecetdRow = (index) => {
    setSelectedRow(index);
  }

  const tableData = () => {
    return (
      <>
        <table className="table table-sm table-striped table-hover mt-1">
          <tbody>
            {
              users.map((user, index) => (
                <tr
                  key={index}
                  onClick={() => handleSelecetdRow(index)}
                  className={selectedRow === index ? 'table-success' : ''}
                >
                  <td style={{ textAlign: 'left' }}>{user}</td>
                  <td onClick={() => handleDelete(index)} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faTrash} color='red' />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </>

    )
  }

  return (
    <>
      <div className='conatiner-fluid col-4 m-5'>
        <h4>Subscribe now</h4>
        <div className='mb-3'>
          <input className="form-control form-control-sm" type="text" placeholder="Please enter username" value={newUser} onChange={(e) => (setNewUser(e.target.value))} />
          <div className="d-grid gap-2">
            <button className="btn btn-sm btn-outline-success mt-1" type="button" onClick={addUser}>add new user</button>
          </div>
        </div>
        <div className="alert alert-info p-0" role="alert">
          <h4>Subscriber List</h4>
        </div>
        <div className='mt-2' style={{ borderRadius: 4 }}>
          {
            tableData()
          }
          {console.log(selectedRow)}
        </div>
      </div>

    </>
  )
}

export default StatefullUserList
