import React, {useState, useEffect} from 'react'
import './LoginSignup.css'
import '../../App.css'
import userico from '../icons/person.png'
import passico from '../icons/password.png'
import emailico from '../icons/email.png'
import para from '../../images/weddingimg.jpg'
import { Button } from '../Button';

export default function LoginSignup() {
  const [button, setButton] = useState(true);
  const [action, setAction] = useState('Zarejestruj się');
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    showButton();
  },[]);
  
  return (
    <div className='sign-up'>
      <img src={para} alt='ess' className='hero-blur'/>
      <div className='login-container' id="foo">
          <div className='header'>
              <div className='text'>{action}</div>
              <div className='underline'></div>
          </div>
          <div className='inputs'>
            {action==='Zaloguj się!' ? <div></div> :
             <div className='input'>
             <img src={userico} alt=''/>
             <input type='text' placeholder='Imie'/>
           </div>
            }
            <div className='input'>
              <img src={emailico} alt=''/>
              <input type='email' placeholder='E-mail'/>
            </div>
            <div className='input'>
              <img src={passico} alt=''/>
              <input type='password' placeholder='Hasło'/>
            </div>
          </div>
          {action==='Zaloguj się!'?<div/>:
          <div className='forgot-password'>Zapomniałeś hasła? <span>Kliknij tutaj</span></div>
          }
          <div className='submit-container'>
            {button && <Button buttonStyle={'btn--outline--sign'} onClick={()=>{setAction('Zaloguj się!')}}>Zarejestruj się</Button>}
            {button && <Button buttonStyle={'btn--outline--sign'} onClick={()=>{setAction('Zarejestruj się!')}}>Zaloguj się</Button>}
          </div>
      </div>
    </div>
  )
}