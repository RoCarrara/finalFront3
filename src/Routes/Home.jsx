import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'


const Home = () => {
  const [data, setData] = useState([])
  const {tema} = useContext(ContextGlobal)

  async function handleFetch (){
      const response = await ( 
        await fetch ('https://jsonplaceholder.typicode.com/users') 
        ).json()
  setData(response)
  }

useEffect(()=>{
  handleFetch()
}, [])

  return (
    <>
    <main className="home" style={{background: tema.home, color: tema.color }} >
      <h1>Bienvenid@!</h1>
      <h3 className='subtHome'>Esta es nuestra lista de odontologos, selecciona al que mas te guste </h3>
      <section className='card-grid'>
      {data ?.map(item => (
          <Card key={item.id} data={item} id={item.id} name={item.name} username={item.username}/>  
      ))}
      </section>
    </main>
    </>
  )
  }


export default Home