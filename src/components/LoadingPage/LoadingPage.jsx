import './LoadingPage.css'

import loadingGIF from '../../assets/spinner.gif'

export default function LoadingPage(){
  return (
    <main className='loading-page bg-lilac'>
      <img src={loadingGIF} alt="A spinning icon" />
    </main>
  )
}