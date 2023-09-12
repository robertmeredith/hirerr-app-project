import { useState } from 'react'
import './Login.scss'
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await newRequest.post('/auth/login', {
        username,
        password,
      })
      localStorage.setItem('currentUser', JSON.stringify(data))
      navigate('/')
    } catch (err) {
      const message = err.response.data
      setError(message)
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && error}
      </form>
    </div>
  )
}

export default Login
