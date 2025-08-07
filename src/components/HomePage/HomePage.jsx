import './HomePage.css'
import SignUpForm from '../SignUpForm/SignUpForm.jsx'

// Image
import bloomImg from '../../assets/bloom.png'

function HomePage() {

  return (
    <>
      <main>
        <section id="hero">
          <h1>Plant a seed and watch it grow - with grass-root funding</h1>
          <p>Crowdfund your next community project with <span className='brand-font'>Sapling</span>. Customise funding tiers, promote your project and engage with your funders all in one place.</p>
          <button>Create your project for free</button>
        </section>

        <section className='form-section column'>
          <img className="form-feature" src={bloomImg} alt="A clay illustration of three brightly coloured flowers in teracotta pots" />
          <SignUpForm />
        </section>
      </main>
    </>
  )
}

export default HomePage
