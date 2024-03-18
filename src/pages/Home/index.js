import React from 'react'
import {Containder, MainImage, List, ContainderHeader,Img, Sobre} from './styled'
import barberHome from '../../assets/home barber.png'
import corte from '../../assets/barb.jpg'
import corte2 from '../../assets/barbe1.jpg'
import corte3 from '../../assets/barbe2.jpg'

function App(){
    return (
        <Containder>
            <nav>

                
                
                <List>
                <li className='listMenu'>  
                <ul className='gui'>Gui Corts</ul>      
                    <ul>Sobre</ul>
                    <ul>Serviços</ul>
                    <ul>Quem Somos</ul>
                    <ul>Contatos</ul>
                </li>

                <div className='boxButton'>
                <button>Agendar horário</button>
                </div>

                </List>
                <MainImage>
                    
                <img className='nevImg' src={barberHome} alt='logo' />

                <div className='paragraph'>
                <p className='textParagraph'>Faça sua presença ser notada. <br/> Faça seu corte conosco. </p>
                </div>

                <div className='operation'>
                <p className='textOperation'>Horário de funcionamento Terça a Sábado das 10:00 às 20:30 Domingo 10:00 as 15:00</p>
                </div>

                <div className='buttonMain'>
                <button >Agendar horario</button>
                </div>
                </MainImage>
            </nav>
        
            <ContainderHeader>
                <Img>

                <div className='containerOne'>
                <img className='imgOne' src={corte} alt='img corte' />
                <img className='imgTwo' src={corte2} alt='img corte' />
                <img className='imgThree' src={corte3} alt='img corte' />
                </div>
                
                </Img>
        <img/>

        <Sobre>

        </Sobre>
     
        </ContainderHeader>

        <section>
            <div>


            </div>

        <div>


        </div>
        <div>


        </div>
        <div>


        </div>
        </section>

        <footer>
            
            </footer>
    



        </Containder>

    )
}

export default App