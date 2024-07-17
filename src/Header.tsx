import './Header.css'
import mascoteFem from './assets/mascoteFem.png'
import mascoteMasc from './assets/mascoteMasc.png'
import logoAmoDown from './assets/amodown-logo3.png'
import menuBurg from './assets/nav-menu-hamburguer.png'

interface Props{
    onClickAboutUs?: () => void
    onClickOpeningHours?: () => void
    onClickContact?: () => void
    onClickActionsAndProjects?: () => void
    onClickLocation?: () => void
}

const Header = ({onClickAboutUs, onClickOpeningHours, onClickContact, onClickActionsAndProjects, onClickLocation}: Props) => {
  return (
    <>
        <header>
            <div className="navegacao">
                <div className="mascote-left">
                    <img src={mascoteFem} alt='mascote AmoDown'/>
                </div>

                <div className="sections-left">
                    <span onClick={onClickContact} >Contato</span>
                    <span onClick={onClickActionsAndProjects} >Ações e Projetos</span>
                    <span onClick={onClickAboutUs} >Sobre</span>
                </div>

                <div className="logo">
                    <img src={logoAmoDown} alt='logo Amo Down' />
                </div>

                <div className="sections-right">
                    <span onClick={onClickLocation} >Localização</span>
                    <span onClick={onClickOpeningHours} >Horário de funcionamento</span>
                </div>

                <div className="mascote-right">
                    <img src={mascoteMasc} alt='mascote AmoDown' />
                </div>

                <div className="nav-hamburguer">    
                    <img src={menuBurg} alt="" />

                    <div className="nav-items">
                        <div className="close-nav-hamburguer">
                            <img src={menuBurg} alt="" />
                        </div>

                        <div className="item">
                            <span onClick={onClickAboutUs} >Sobre</span>
                        </div>

                        <div className="item">
                            <span onClick={onClickActionsAndProjects} >Ações e Projetos</span>
                        </div>

                        <div className="item">
                            <span onClick={onClickContact} >Contatos</span>
                        </div>

                        <div className="item">
                            <span onClick={onClickLocation} >Localização</span>
                        </div>

                        <div className="item">
                            <span onClick={onClickOpeningHours} >Horário de funcionamento</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header