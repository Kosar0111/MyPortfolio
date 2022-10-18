import { useState, useEffect } from 'react'
import './Subscribers.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Subscribers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => setUsers(res.data))
  }, [])
  return (
    <div className='subscribers-content'>
      <h1 className='subscribers'>Subscribers</h1>
      {users.map(user => (
        <li
          key={user.id}
          className='subscribers-list'
        >
          {user.name}
        </li>
      ))}
      <Link
        to={'/messages/new'}
        className=''
      ></Link>
    </div>
  )
}

export default Subscribers
