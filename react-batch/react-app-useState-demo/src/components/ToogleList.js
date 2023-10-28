import React, { useState } from 'react'

const ToogleList = () => {

    let [showOrHide, updateShowOrHide] = useState(false);

    const toggleList = () => {
        updateShowOrHide(!showOrHide);
    }

    const [users, changeUser] = useState(['Aman', 'Nsihat', 'Somuya']);

    // const listJsx = () => (<ul className="list-group">
    //     <li className="list-group-item">An item</li>
    //     <li className="list-group-item">A second item</li>
    //     <li className="list-group-item">A third item</li>
    //     <li className="list-group-item">A fourth item</li>
    //     <li className="list-group-item">And a fifth one</li>
    // </ul>)

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
        <div>
            <h3>Use List</h3>
            <button className={showOrHide ? 'btn btn-sm btn-danger' : 'btn btn-sm btn-success'} onClick={toggleList}>{showOrHide ? 'Hide user list' : 'Show user list'}</button>
            <div>
                {showOrHide && listJsx()}
            </div>
        </div>
    )
}

export default ToogleList
