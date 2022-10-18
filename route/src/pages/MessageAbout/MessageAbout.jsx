import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './MessageAbout.css'

const MessageAbout = () => {
  const { id } = useParams()
  const [post, setPost] = useState([null])
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`).then(res => setPost(res.data))
  }, [id])

  const navigate = useNavigate()
  const goBack = e => navigate(-1)
  const goHome = () => navigate('/', { replace: true })

  return (
    <div>
      <button
        className='back'
        onClick={goBack}
      >
        Go Back
      </button>
      <button
        className='back'
        onClick={goHome}
      >
        Go Home
      </button>
      {post && (
        <>
          <h1 className='post-name'>{post.name}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  )
}

export default MessageAbout
