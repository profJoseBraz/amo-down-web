import { RefObject } from 'react'
import './ActionsAndProjects.css'

interface Props{
    goToActionsAndProjects?: RefObject<HTMLDivElement>
}

const ActionsAndProjects = ({goToActionsAndProjects}: Props) => {
  return (
    <>
        <div ref={goToActionsAndProjects} className="container-events">

            <div className="selectEvents-box">

                <div className="actions-container">
                    <div className="title-act-proj">
                        <span>Ações</span>
                    </div>

                    <div className="events">
                        <div className="event">
                            <span>Chá das mães</span>
                        </div>

                        <div className="event">
                            <span>Chá dos pais</span>
                        </div>
                    </div>
                </div>

                <div className="projects-container">
                    <div className="title-act-proj">
                        <span>Projetos</span>
                    </div>

                    <div className="events">
                        <div className="event">
                            <span>Projeto Cariótipo</span>
                        </div>

                        <div className="event">
                            <span>Projeto Acolhimento</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="events-box">
                <div className="event-title">
                    <span>
                        NOME DA AÇÃO OU PROJETO
                    </span>
                </div>
                <div className="render-event">
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus beatae fugiat commodi fuga possimus earum harum vitae officia corrupti! Quaerat minus nobis, adipisci eos commodi labore. Optio, praesentium repellendus.</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default ActionsAndProjects