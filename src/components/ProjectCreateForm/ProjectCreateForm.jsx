import { useState } from 'react'
import { projectCreate } from '../../services/projects'
import { useNavigate } from 'react-router'

import loadingGIF from '../../assets/spinner.gif'

export default function ProjectCreateForm(){
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    goalAmount: 0,
    deadline: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // * Location Variables
  const navigate = useNavigate()

  // * Functions
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    try {
      const { data } = await projectCreate(formData)
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
      <h2>Launch your new <span className="brand-font">Sapling</span> project 🚀</h2>

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
      <input type="date" name="deadline" id="deadline" value={formData.deadline} onChange={handleChange} />
      {errors.deadline && <p className='error-message'>{errors.deadline}</p>}

      <button type='submit'>{isSubmitting ? <img width={20} src={loadingGIF} alt="spinning icon" /> : 'Create project' }</button>
    </form>
  )
}