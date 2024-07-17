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
    if (aboutUs.current) {
      const topValue = document.body.getBoundingClientRect().top
      const sessionValue = aboutUs.current.getBoundingClientRect().top
      const ajuste = 0
      
      const result = sessionValue - topValue
      const scrollValue = result + ajuste

      window.scrollTo({
        top: scrollValue,
        behavior: 'smooth'
      })
    }
  }

  // levar para a session do horário de funcionamento
  const openingHours = useRef<HTMLDivElement>(null)
  const handleRedirectToOpeningHours = () => {
    if (openingHours.current) {
      const topValue = document.body.getBoundingClientRect().top
      const sessionValue = openingHours.current.getBoundingClientRect().top
      const ajuste = -125
      
      const result = sessionValue - topValue
      const scrollValue = result + ajuste

      window.scrollTo({
        top: scrollValue,
        behavior: 'smooth'
      })
    }
  }

  // levar para a session de contato
  const contact = useRef<HTMLDivElement>(null)
  const handleRedirectToContact = () => {
    if (contact.current) {
      const topValue = document.body.getBoundingClientRect().top
      const sessionValue = contact.current.getBoundingClientRect().top
      const ajuste = -120
      
      const result = sessionValue - topValue
      const scrollValue = result + ajuste

      window.scrollTo({
        top: scrollValue,
        behavior: 'smooth'
      })
    }
  }

  // levar para a session de ações e projetos
  const actionAndProjetcts = useRef<HTMLDivElement>(null)
  const handleRedirectToActionAndProjects = () => {
    if (actionAndProjetcts.current) {
      const topValue = document.body.getBoundingClientRect().top
      const sessionValue = actionAndProjetcts.current.getBoundingClientRect().top
      const ajuste = 10
      
      const result = sessionValue - topValue
      const scrollValue = result + ajuste

      window.scrollTo({
        top: scrollValue,
        behavior: 'smooth'
      })
    }
  }

  // levar para a session da localização
  const location = useRef<HTMLDivElement>(null)
  const handleRedirectToLocation = () => {
    if (location.current) {
      const topValue = document.body.getBoundingClientRect().top
      const sessionValue = location.current.getBoundingClientRect().top
      const ajuste = 10
      
      const result = sessionValue - topValue
      const scrollValue = result + ajuste

      window.scrollTo({
        top: scrollValue,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <Header
      onClickAboutUs={handleRedirectToAboutUs}
      onClickOpeningHours={handleRedirectToOpeningHours}
      onClickContact={handleRedirectToContact}
      onClickActionsAndProjects={handleRedirectToActionAndProjects}
      onClickLocation={handleRedirectToLocation}
      />
      
      <Sobre goToAbout={aboutUs}/>
      <HorarioDeFuncionamento goToOpeningHours={openingHours} />
      <Location goToLocation={location} />
      <Form goToContact={contact} />
      <Footer />
    </>
  )
}

export default App
