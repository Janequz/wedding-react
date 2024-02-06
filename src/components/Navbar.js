import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [navButton, setNavButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true);
      setNavButton(true);
    } else {
      setNavbar(false);
      setNavButton(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <>
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Halo Ślub!
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Strona Główna
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/cennik' className='nav-links' onClick={closeMobileMenu}>
              Cennik
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/onas' className='nav-links' onClick={closeMobileMenu}>
              O nas
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
              FAQ
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Kontakt
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle={navButton ? 'btn--outline active' : 'btn--outline'}>Zarejestruj się</Button>}
      </div>
    </nav>
    </>
  )
}

export default Navbar