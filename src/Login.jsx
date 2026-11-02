
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  function handleLogin(event) {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="page">
      <h1>Welcome Back</h1>
      <p>Login to your fitness account</p>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Enter Email" required />
        <input type="password" placeholder="Enter Password" required />
        <button type="submit">Login</button>
      </form>

      <p>New user? <Link to="/register">Create Account</Link></p>
    </div>
  )
}

export default Login
