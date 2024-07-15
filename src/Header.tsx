import './Header.css'
import mascoteFem from './assets/mascoteFem.png'
import mascoteMasc from './assets/mascoteMasc.png'
import logoAmoDown from './assets/amodown-logo3.png'
import menuBurg from './assets/nav-menu-hamburguer.png'

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

                <div className="nav-hamburguer">    
                    <img src={menuBurg} alt="" />

                    <div className="nav-items">
                        <div className="close-nav-hamburguer">
                            <img src={menuBurg} alt="" />
                        </div>

                        <div className="item">
                            <span>Sobre</span>
                        </div>

                        <div className="item">
                            <span>Ações e Projetos</span>
                        </div>

                        <div className="item">
                            <span>Contatos</span>
                        </div>

                        <div className="item">
                            <span>Localização</span>
                        </div>

                        <div className="item">
                            <span>Horário de funcionamento</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="subtitle">
                <span>Associação sem fins lucrativos para pessoas com Síndrome de Down</span>
            </div>
        </header>
    </>
  )
}

export default Header