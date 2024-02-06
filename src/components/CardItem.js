/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

function CardItem(props) {
    return (
      <>
        <li className='cards__item'>
          <Link className='cards__item__link' to={props.path}>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <div className='cards__item__img'
                  alt='OfertaPremium'
                  src={props.src}>
                <img
                className='cards__item__img'
                  alt='Ofertanormal'
                  src={props.src}
                />
              </div>
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    );
  }

export default CardItem