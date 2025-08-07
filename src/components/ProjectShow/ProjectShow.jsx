import { Link, useNavigate, useParams } from 'react-router'
import { projectDelete, projectShow } from '../../services/projects'
import ErrorPage from '../ErrorPage/ErrorPage'
import LoadingPage from '../LoadingPage/LoadingPage'
import './ProjectShow.css'
import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

import { FaRegEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"

export default function ProjectShow(){
  // * Contexts
  const { user } = useContext(UserContext)

  // * State
  const [project, setProject] = useState({})
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState()

  const { projectId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getProjectData = async () => {
      setIsLoading(true)
      try {
        const { data } = await projectShow(projectId)
        setProject(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getProjectData()
  }, [projectId])

  const handleDelete = async () => {
    try {
      await projectDelete(projectId)
      navigate('/projects')
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) return <LoadingPage />

  if (error) return <ErrorPage error={error} />

  return (
    <main className='bg-lilac text-center'>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>Goal amount: £{project.goalAmount}</p>
      { project?.owner?._id === user?._id &&
        <section className='controls'>
          <Link to={`/projects/${projectId}/edit`}>
            <FaRegEdit />
          </Link>
          <button onClick={handleDelete}>
            <MdDelete />
          </button>
        </section>
      }
    </main>
  )
}