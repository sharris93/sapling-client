import './ErrorPage.css'
import { Link } from 'react-router'

import flowersWilting from '../../assets/flowers-wilting.png'

export default function ErrorPage({ error }){
  console.log(error)
  return (
    <main className="error-page">
      <img src={flowersWilting} alt="Three clay flowers in terracotta pots wilting" />
      <h1>Oops! Something went wrong</h1>
      <Link className='button' to="/">Back to the home page</Link>
    </main>
  )
}