import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import logo from './assets/5227c776b66bc83398ae99df32875ded0253f0f1.png'
import './App.css'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

 const handleLogin = () => {
  const newErrors = {}
  const emailRegex = /^[^\s@]+@[^\s@]+\.com$/

  if (!userId.trim()) {
    newErrors.userId = 'User ID is required'
  } else if (!emailRegex.test(userId)) {
    newErrors.userId = 'Enter valid email address'
  }

  if (!password.trim()) {
    newErrors.password = 'Password is required'
  }

  setErrors(newErrors)

  if (Object.keys(newErrors).length === 0) {
    navigate('/dashboard')
  }
}


  return (
    <div className="container">
      <div className="card-container">
        <img src={logo} alt="logo" className="card-logo" />

        <div className="card-content">
          <h1>Welcome, Coach!</h1>
          <p>
            Your team is counting on you, login to manage the workouts, track the
            progress, and inspire your clients every day.
          </p>
        </div>

        <div className="card-footer">
          © 2025 Tavasyam. All rights reserved.
        </div>
      </div>

      <div className="loginform-container">
        <h2>Log in</h2>
        <p className="subtitle">Login to your account to continue</p>

        <label className="field-label">User ID</label>
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className={errors.userId ? 'input-error' : ''}
        />
        {errors.userId && <p className="error-text">{errors.userId}</p>}

        <label className="field-label">Password</label>

        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? 'input-error' : ''}
          />
          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && <p className="error-text">{errors.password}</p>}

        <span className="forgot">Forgot password?</span>

        <button className="login-btn" onClick={handleLogin}>
          Enter Dashboard
        </button>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<HomeScreen />} />
    </Routes>
  )
}

export default App
