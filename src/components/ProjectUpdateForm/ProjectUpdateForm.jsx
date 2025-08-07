import { useEffect, useState } from 'react'
import { projectUpdate } from '../../services/projects'
import { useNavigate, useParams } from 'react-router'
import { projectShow } from '../../services/projects'

import loadingGIF from '../../assets/spinner.gif'

export default function ProjectUpdateForm(){
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    goalAmount: 0,
    deadline: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [prefillError, setPrefillError] = useState('')

  // * Location Variables
  const navigate = useNavigate()
  const { projectId } = useParams()

  useEffect(() => {
    const getProjectData = async () => {
      try {
        const { data } = await projectShow(projectId)
        setFormData(data)
      } catch (error) {
        console.log(error)
        setPrefillError('Unable to fetch project details. Reload to retry.')
      }
    }
    getProjectData()
  }, [projectId])

  // * Functions
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    try {
      const { data } = await projectUpdate(projectId, formData)
      navigate(`/projects/${data._id}`)
    } catch (error) {
      console.log(error)
      setErrors(error.response.data)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2>Edit project details</h2>

      {prefillError && <p className="error-message text-center">{prefillError}</p>}

      <label htmlFor="name">Project name</label>
      <input type="text" name="name" id="name" placeholder='Your project name' value={formData.name} onChange={handleChange} />
      {errors.name && <p className='error-message'>{errors.name}</p>}

      <label htmlFor="description">Project description</label>
      <textarea name="description" id="description" placeholder='Tell your supporters a little bit about your project' rows="10" value={formData.description} onChange={handleChange}></textarea>
      {errors.description && <p className='error-message'>{errors.description}</p>}

      <label htmlFor="goalAmount">Goal amount</label>
      <input type="number" name="goalAmount" id="goalAmount" placeholder='Your goal amount' value={formData.goalAmount} onChange={handleChange} />
      {errors.goalAmount && <p className='error-message'>{errors.goalAmount}</p>}

      <label htmlFor="deadline">Project deadline</label>
      <input type="date" name="deadline" id="deadline" defaultValue={formData.deadline} onChange={handleChange} />
      {errors.deadline && <p className='error-message'>{errors.deadline}</p>}

      <button type='submit'>{isSubmitting ? <img width={20} src={loadingGIF} alt="spinning icon" /> : 'Confirm changes' }</button>
    </form>
  )
}