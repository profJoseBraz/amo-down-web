import './Header.css'
import mascoteFem from './assets/mascoteFem.png'
import mascoteMasc from './assets/mascoteMasc.png'
import logoAmoDown from './assets/amodown-logo.png'

const Header = () => {
  return (
    <>
        <header>
            <div className="navegacao">
                <div className="mascote-left">
                    <img src={mascoteFem} alt='mascote AmoDown'/>
                </div>

                <div className="sections-left">
                    <span>Contato</span>
                    <span>Ações e Projetos</span>
                    <span>Sobre</span>
                </div>

                <div className="logo">
                    <img src={logoAmoDown} alt='logo Amo Down' />
                </div>

                <div className="sections-right">
                    <span>Localização</span>
                    <span>Horário de funcionamento</span>
                </div>

                <div className="mascote-right">
                    <img src={mascoteMasc} alt='mascote AmoDown' />
                </div>
            </div>

            <div className="subtitle">
                <span>Assoociação sem fins lucrativos para pessoas com Síndrome de Down</span>
            </div>
        </header>
    </>
  )
}

export default Header