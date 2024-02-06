import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import card from '../images/card1.jpg'
import card2 from '../images/card2.jpg'

function Cards() {
  return (
    <div className='cards'>
        <h1>Sprawdź oferte </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src={card} 
                        text={'Zobacz naszą ofertę tej poczty ślubnej'}
                        label={'Halo Ślub!'}
                        path={'/haloslub'}
                    />
                    <CardItem
                        src={card2}
                        text={'Zobacz naszą ofertę tej poczty ślubnej'}
                        label={'Halo Ślub! ONLINE'}
                        path={'/haloslubonline'}
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards