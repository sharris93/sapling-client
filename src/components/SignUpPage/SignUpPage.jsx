import './SignUpPage.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Navigate } from 'react-router'

// Form
import SignUpForm from '../SignUpForm/SignUpForm'

export default function SignUpPage(){
  // * Contexts
  const { user } = useContext(UserContext)

  // Redirect to home page if user is signed in
  if (user) return <Navigate to="/" />
  
  return (
    <main>
      <section className="form-section full">
        <SignUpForm />
      </section>
    </main>
  )
}