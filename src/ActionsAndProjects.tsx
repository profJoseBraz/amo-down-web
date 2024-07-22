import { RefObject, useState } from 'react'
import './ActionsAndProjects.css'

import projAcolhimentoPicture from './assets/projAcolhApresPicture-resized.png'
import logoAmoDown from './assets/logoAmoDownNoText.png'
import logoInsta from './assets/instagramLogo.svg'
import logoWhats from './assets/whatsLogo.svg'

interface Props{
    goToActionsAndProjects?: RefObject<HTMLDivElement>
}

const ChaDasMaes = () => {
    return (
        <>
            AINDA NÃO HÁ CONTEÚDO
        </>
    )
}

const ChaDosPais = () => {
    return (
        <>
            AINDA NÃO HÁ CONTEÚDO
        </>
    )
}

const ProjCariot = () => {
    return (
        <>
            AINDA NÃO HÁ CONTEÚDO
        </>
    )
}

const ProjAcolh = () => {
    return (
        <>
            <div className="container-event-active">
                <div className="projeto-acolhimento">

                    <div className="left-acolh">
                        <div className="txt-top">
                            <span className='yourBaby'>SEU BEBÊ</span>
                            <span className='complement-yourBaby' >NASCEU COM</span>
                            <span className='complement-yourBaby' >SÍNDROME DE DOWN</span>
                        </div>

                        <div className="txt-bot">
                            <span className='andNow' >E AGORA?</span>
                        </div>
                    </div>
                

                    <div className="right-acolh">
                        <img src={projAcolhimentoPicture} alt="" />
                        <span className='arentAlone' >VOCÊ NÃO ESTÁ SOZINHA(O)</span>
                        <span className='img-auxl-img' >Temos um grupo de pais para ajudar</span>
                        <span className='img-auxl-img'>nessa jornada! Conheça a <strong>AMO DOWN -</strong></span>
                        <span className='img-auxl-img'>Associação Mourãoense de Síndrome De Down</span>

                        <div className="bot-logo-social">
                            <div className="bot-logo">
                                <img src={logoAmoDown} alt="" />
                            </div>

                            <div className="bot-social">

                                <div className="bot-instagram">
                                    <img src={logoInsta} alt="" />
                                    <span>@amodown</span>
                                </div>

                                <div className="bot-whats">
                                    <img src={logoWhats} alt="" />
                                    <div className="whats-numbers">
                                        <span>(44) 9 9835-0008</span>
                                        <span>(44) 9 9934-5084</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}



const ActionsAndProjects = ({goToActionsAndProjects}: Props) => {

    const [event, setEvent] = useState("ProjAcolh")

    const handleSetEventChaMae = () => {
    setEvent("ChaMae")
    }

    const handleSetEventChaPai = () => {
    setEvent("ChaPai")
    }

    const handleSetEventCariotipo = () => {
    setEvent("ProjCariot")
    }

    const handleSetEventAcolh = () => {
    setEvent("ProjAcolh")
    }

  return (
    <>
        <div ref={goToActionsAndProjects} className="container-events">

            <div className="selectEvents-box">

                <div className="actions-container">
                    <div className="title-act-proj">
                        <span>Ações</span>
                    </div>

                    <div className="events">
                        <div onClick={handleSetEventChaMae}  className="event">
                            <span >Chá das mães</span>
                        </div>

                        <div onClick={handleSetEventChaPai} className="event">
                            <span>Chá dos pais</span>
                        </div>
                    </div>
                </div>

                <div className="projects-container">
                    <div className="title-act-proj">
                        <span>Projetos</span>
                    </div>

                    <div className="events">
                        <div onClick={handleSetEventCariotipo} className="event">
                            <span>Projeto Cariótipo</span>
                        </div>

                        <div onClick={handleSetEventAcolh} className="event">
                            <span>Projeto Acolhimento</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="events-box">
                <div className="render-event">
                    {event == "ChaMae" ? (<ChaDasMaes />): ("")}
                    {event == "ChaPai" ? (<ChaDosPais />): ("")}
                    {event == "ProjCariot" ? (<ProjCariot />): ("")}
                    {event == "ProjAcolh" ? (<ProjAcolh/>): ("")}
                </div>
            </div>
        </div>
    </>
  )
}

export default ActionsAndProjects