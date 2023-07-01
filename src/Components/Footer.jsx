import React from 'react'
import facebookicon from '../images/ico-facebook.png';
import instagramicon from '../images/ico-instagram.png';
import whatsappicon from '../images/ico-whatsapp.png';
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';


const Footer = () => {
  const {tema} = useContext(ContextGlobal)
  return (
    
    <footer style={{background: tema.footer, color: tema.color}}>
    <p>Powered by <b>Rocio Carrara</b></p>
    <img src={facebookicon} alt='' />
    <img src={instagramicon} alt='' />
    <img src={whatsappicon} alt='' />     
    </footer>

  )
}

export default Footer
