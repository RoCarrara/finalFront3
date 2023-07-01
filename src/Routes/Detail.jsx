import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 const [infoDentista, setInfoDentista] = useState({})
 const {tema} = useContext(ContextGlobal)
 const params = useParams()
 
  async function handleFetch() {
    const response = await(
      (await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      ).json())
      setInfoDentista(response)
    
  }

  useEffect(() => {
    handleFetch()
  }, [])


  return (
    <section className='detail' style={{background: tema.home, color: tema.color }}>
      <h1 className='h1detail'>Detail Dentist</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{infoDentista.name}</td>
            <td>{infoDentista.email}</td>
            <td>{infoDentista.phone}</td>
            <td>{infoDentista.website}</td>
          </tr>
        </tbody>
      </table>
     
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </section>
  )
}

export default Detail