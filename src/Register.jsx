
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  function handleRegister(event) {
    event.preventDefault()
    alert('Registration successful!')
    navigate('/login')
  }

  return (
    <div className="page">
      <h1>Create Account</h1>
      <p>Join FitTrack Pro today</p>

      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Enter Name" required />
        <input type="email" placeholder="Enter Email" required />
        <input type="password" placeholder="Create Password" required />
        <button type="submit">Register</button>
      </form>

      <p>Already registered? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Register
