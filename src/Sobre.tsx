import './Sobre.css'
import tempIMG1 from './assets/20210208-144547jpg.webp'
import tempIMG2 from './assets/IMG-20210205-223235-191jpg.webp'
import tempIMG3 from './assets/shutterstock_1090956650.webp'
import maoAmoDown from './assets/maozinha-amoDown.png'
import { RefObject } from 'react'

interface Props {
    goToAbout?: RefObject<HTMLDivElement>
}

const Sobre = ({goToAbout}: Props) => {
  return (
    <>
        <div ref={goToAbout} className="container-sobre">
            <img className='bg-decoration-top-right' src={maoAmoDown} alt='mão amoDown'/>
            <img className='bg-decoration-top-left' src={maoAmoDown} alt='mão amoDown'/>
            <img className='bg-decoration-bottom-mid' src={maoAmoDown} alt='mão amoDown'/>

            <span id='about-us' >Sobre nós</span>
            <div className="container-boxes">
                <div className="box">
                    <div className="image">
                        <img src={tempIMG1} alt='foto de uma das nossas crianças'/>
                    </div>

                    <div className="text">
                        <span>Amo Down é uma associação formada por pessoas com síndrome de Down em Campo Mourão. Nossa associação promove uma série de atividades e eventos de interesse para os integrantes, para pessoas que têm a síndrome, familiares e que desejam trocar experiências e se integrar à comunidade em geral. Entre em contato pelo formulário abaixo para obter mais informações.</span>
                    </div>
                </div>
                
                <div className="box">
                    <div className="image">
                        <img src={tempIMG2} alt='foto de uma das nossas crianças'/>
                    </div>

                    <div className="text">
                        <span>Nossa associação é sem fins lucrativos e oferece a possibilidade de trocas de experiências entre as pessoas que se sentem com algo em comum: ter a síndrome de Down ou ser mãe, pai, família. Entre em contato para saber mais detalhes de como você também pode fazer parte desta associação e usufruir dos recursos destinados aos membros. Além de atividades de cunho livre, nossos eventos representam uma excelente oportunidade para integração com a comunidade.</span>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={tempIMG3} alt='foto de uma das nossas crianças'/>
                    </div>

                    <div className="text">
                        <span>Amo Down promove com certa regularidade diversos eventos com o objetivo de fortalecer a associação e integrar os membros. Uma vez que você passe a fazer parte da associação, receberá informações relevantes e poderá também usufruir do benefício das atividades que oferecemos para os associados. Participe e veja como é possível se sentir bem e integrado, fazendo parte de uma associação séria e comprometida.</span>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Sobre