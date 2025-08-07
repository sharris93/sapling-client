import './SignInPage.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Navigate, useSearchParams } from 'react-router'

// Form
import SignInForm from '../SignInForm/SignInForm'

export default function SignInPage(){
  // * Contexts
  const { user } = useContext(UserContext)
  
  const [searchParams] = useSearchParams()

  const redirectPath = searchParams.get('_redirect')

  // Redirect to home page if user is signed in
  if (user) return <Navigate to={redirectPath || '/'} />

  return (
    <main>
      <section className="form-section full">
        <SignInForm />
      </section>
    </main>
  )
}