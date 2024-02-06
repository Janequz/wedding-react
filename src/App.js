import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import SignUp from './components/pages/LoginSignup';
import Onas from './components/pages/Onas';
import Kontakt from './components/pages/Kontakt';
import Faq from './components/pages/Faq';
import Cennik from './components/pages/Cennik';

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path='/sign-up' Component={SignUp} />
        <Route path='/onas' Component={Onas}/>
        <Route path='/contact' Component={Kontakt}/>
        <Route path='/faq' Component={Faq}/>
        <Route path='/cennik' Component={Cennik}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
