import { projectIndex } from '../../services/projects'
import './ProjectIndex.css'
import { useEffect, useState } from 'react'

// Page components
import ErrorPage from '../ErrorPage/ErrorPage'
import LoadingPage from '../LoadingPage/LoadingPage'
import { Link } from 'react-router'

export default function ProjectIndex(){
  // * State
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProjectData = async () => {
      setIsLoading(true)
      try {
        const { data } = await projectIndex()
        setProjects(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getProjectData()
  }, [])


  if (isLoading) return <LoadingPage />

  if (error) return <ErrorPage error={error} />

  return (
    <main className='full bg-lilac text-center'>
      <h1>Explore recently launched projects</h1>
      { projects.length > 0 
        ? projects.map(project => {
          return (
            <div key={project._id} className='project-card'>
              <Link to={`/projects/${project._id}`}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </Link>
            </div>
          )
        })
        : <p>There are currently no projects to display</p>
      }
    </main>
  )
}