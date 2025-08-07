import { Routes, Route } from 'react-router'

// Global components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// Page components
import HomePage from './components/HomePage/HomePage'
import SignUpPage from './components/SignUpPage/SignUpPage'
import SignInPage from './components/SignInPage/SignInPage'

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App