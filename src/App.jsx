import { Routes, Route } from 'react-router'

// Global components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// Page components
import HomePage from './components/HomePage/HomePage'
import SignUpPage from './components/SignUpPage/SignUpPage'
import SignInPage from './components/SignInPage/SignInPage'
import ProjectIndex from './components/ProjectIndex/ProjectIndex'
import ProjectShow from './components/ProjectShow/ProjectShow'
import ProjectCreatePage from './components/ProjectCreatePage/ProjectCreatePage'
import ProjectUpdatePage from './components/ProjectUpdatePage/ProjectUpdatePage'

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/projects" element={<ProjectIndex />} />
        <Route path="/projects/create" element={<ProjectCreatePage />} />
        <Route path="/projects/:projectId/edit" element={<ProjectUpdatePage />} />
        <Route path="/projects/:projectId" element={<ProjectShow />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App