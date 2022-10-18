import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'
import './LoginPage.css'

const LoginPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { signin } = useAuth()

  const fromPage = location.state?.from?.pathname || '/'
  const hundleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const user = form.username.value
    console.log(user)
    signin(user, () => navigate(fromPage, { replace: true }))
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form
        onSubmit={hundleSubmit}
        className='login-page'
      >
        <label>
          Name: <input name='username' />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
