import { signIn } from '../../services/users'
import './SignInForm.css'
import { useState, useContext } from 'react'
import { setToken, getUser } from '../../utils/auth'
import { useNavigate } from 'react-router'
import { UserContext } from '../../contexts/UserContext'

export default function SignInForm(){
  // * Context
  const { setUser } = useContext(UserContext)

  // * State
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  })
  const [errors, setErrors] = useState({})

  // * Location variables
  const navigate = useNavigate()

  // * Functions
  const handleSubmit = async (e) => {
    setErrors({})
    e.preventDefault()
    try {
      const { data } = await signIn(formData)
      setToken(data.token)
      setUser(getUser())
      navigate('/')
    } catch (error) {
      console.log(error)
      setErrors(error.response.data)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2>Welcome back</h2>

      <label htmlFor="identifier">Username or email address</label>
      <input type="text" name="identifier" id="identifier" placeholder='Your username or email' value={formData.identifier} onChange={handleChange} />
      
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" placeholder='Your password' value={formData.password} onChange={handleChange} />
      
      { errors.message && <p className='error-message'>{errors.message}</p> }
      
      <button type="submit">Sign in</button>
    </form>
  )
}