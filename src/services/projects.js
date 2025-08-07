import axios from 'axios'
import { getToken } from '../utils/auth'

const BASE_URL = import.meta.env.VITE_API_URL + '/projects'

export const projectIndex = () => {
  return axios.get(BASE_URL)
}

export const projectShow = (projectId) => {
  return axios.get(`${BASE_URL}/${projectId}`)
}

export const projectCreate = (formData) => {
  return axios.post(BASE_URL, formData, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export const projectUpdate = (projectId, formData) => {
  return axios.put(`${BASE_URL}/${projectId}`, formData, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export const projectDelete = (projectId) => {
  return axios.delete(`${BASE_URL}/${projectId}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}