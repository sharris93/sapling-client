import { Link } from 'react-router'
import './Navbar.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

// Images
import saplingImg from '../../assets/sapling-logo.png'

export default function Navbar(){
  const { user } = useContext(UserContext)

  return (
    <header>
      <div>
        <Link to="/" className='logo brand-font'>
          <img src={saplingImg} alt="A green sapling emerging from soil in a terracotta pot all made of clay" />
          Sapling
        </Link>
      </div>
      <nav>
        <span className='tablet-up'>
          <Link to="/projects">Support a project</Link>
          <hr />
        </span>
        <Link to="/sign-in">Sign in</Link>
        <Link to="/sign-up" className='button'>Create an account</Link>
      </nav>
    </header>
  )
}