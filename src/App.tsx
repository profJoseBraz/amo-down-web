import { useRef } from 'react'
import './App.css'
import HorarioDeFuncionamento from './assets/HorarioDeFuncionamento'
import Footer from './Footer'
import Form from './Form'
import Header from './Header'
import Location from './Location'
import Sobre from './Sobre'

function App() {

  // levar para a session do sobre nós
  const aboutUs = useRef<HTMLDivElement>(null)
  const handleRedirectToAboutUs = () => {
      if(window.scrollY > 0){
          // aboutUs.current.scrollIntoView({behavior: "smooth"})
          window.scrollTo({top: 0, behavior: "smooth"})

      }
  }

  // levar para a session do horário de funcionamento
  const openingHours = useRef<HTMLDivElement>(null)
  const handleRedirectToOpeningHours = () => {
      if(openingHours.current){
          openingHours.current.scrollIntoView({behavior: "smooth"})
      }
  }

  return (
    <>
      <Header
      onClickAboutUs={handleRedirectToAboutUs}
      onClickOpeningHours={handleRedirectToOpeningHours}
      />
      
      <Sobre goToAbout={aboutUs}/>
      <HorarioDeFuncionamento goToOpeningHours={openingHours} />
      <Location />
      <Form />
      <Footer />
    </>
  )
}

export default App
