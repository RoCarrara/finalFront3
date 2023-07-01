import React from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import { useContext } from 'react';

const Navbar = () => {

  const { tema, handleTheme } = useContext(ContextGlobal);

  return (
   
      <nav style={{background: tema.nav, color: tema.color}}>
      <section className='navLinks'>
      <Link to={'/'}>Home</Link>
      <Link to={'/favs'}>Favoritos</Link>
      <Link to={'/contact'}>Contacto</Link>
      </section>
      <section className='navButton'>
      <button className='themeButton' onClick={handleTheme}>Change theme</button>
      </section>
      </nav>
    
  )
}

export default Navbar