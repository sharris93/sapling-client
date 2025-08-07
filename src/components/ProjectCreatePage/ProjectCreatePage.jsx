import './ProjectCreatePage.css'
import ProjectCreateForm from '../ProjectCreateForm/ProjectCreateForm'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Navigate } from 'react-router'

export default function ProjectCreatePage(){
  const { user } = useContext(UserContext)

  console.log('LOADED PROJECT CREATE PAGE')

  if (!user) return <Navigate to="/sign-in?_redirect=/projects/create" />

  return (
    <main className='bg-lilac'>
      <section className="form-section">
        <ProjectCreateForm />
      </section>
    </main>
  )
}