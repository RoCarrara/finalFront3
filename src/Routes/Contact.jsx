import React from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

const Contact = () => {
  const {tema} = useContext(ContextGlobal)
  return (
    <div className='contact' style={{background: tema.home, color: tema.color }}>
      <h2 className='h2contact'>Necesitas mas informacion?</h2>
      <p className='pcontact'>Envianos tu consulta te contactaremos pronto!</p>
      <Form/>
    </div>
  )
}

export default Contact