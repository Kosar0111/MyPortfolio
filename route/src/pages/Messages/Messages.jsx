import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'
import './Messages.css'
import MessageFilter from '../../components/MessageFilter/MessageFilter'

const Messages = () => {
  const [posts, setPosts] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const postQuery = searchParams.get('post') || ''
  const latest = searchParams.has('latest')
  const startFrom = latest ? 80 : 1

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments?_limit=100')
      .then(res => setPosts(res.data))
  }, [])
  return (
    <div className='messages-content'>
      <h1 className='messages'>Messages</h1>
      <Link
        to={'/messages/new'}
        className='btn-new'
      >
        New Message
      </Link>
      <MessageFilter
        setSearchParams={setSearchParams}
        latest={latest}
        postQuery={postQuery}
      />

      {posts
        .filter(post => post.name.includes(postQuery) && post.id >= startFrom)
        .map(post => (
          <Link
            key={post.id}
            to={`/messages/${post.id}`}
          >
            <li className='messages-list'>{post.name}</li>
          </Link>
        ))}
    </div>
  )
}

export default Messages
