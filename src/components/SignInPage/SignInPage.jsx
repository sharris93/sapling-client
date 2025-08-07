import './SignInPage.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Navigate } from 'react-router'

// Form
import SignInForm from '../SignInForm/SignInForm'

export default function SignInPage(){
  // * Contexts
  const { user } = useContext(UserContext)

  // Redirect to home page if user is signed in
  if (user) return <Navigate to="/" />

  return (
    <main>
      <section className="form-section full">
        <SignInForm />
      </section>
    </main>
  )
}