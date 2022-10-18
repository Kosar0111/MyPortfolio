import './NewMessages.css'
import { useAuth } from '../../hook/useAuth'
import { useNavigate } from 'react-router-dom'

const NewMessages = () => {
const navigate = useNavigate()
const { signOut } = useAuth()

  return (
    <>
      <button
        className='logout'
        onClick={() => signOut(() => navigate('/', { replace: true }))}
      >
        Log Out
      </button>
      <form className='form'>
        <label className='lable'>Name</label>
        <input
          type='text'
          className='form__input'
        />
        <label className='lable'>Description</label>
        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          className='form__textarea'
        />
        <button>Add</button>
      </form>
    </>
  )
}

export default NewMessages
