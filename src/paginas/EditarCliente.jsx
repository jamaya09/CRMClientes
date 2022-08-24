import React from 'react'
import Formulario from '../components/Formulario'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

const EditarCliente = () => {
  const {id} = useParams()
  const  [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true)
  useEffect(() => {
    
    const verCliente = async () =>{
      try {
        const url = `${import.meta.env.VITE_URL}/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado)
          setCargando(false)
      } catch (error) {
        console.log(error)
      }
    }
    verCliente()
  }, []);
  return (
    <div>
        <h1 className=' text-4xl font-bold text-blue-600'>
          Editar cliente
        </h1>
        <p className='mt-5'>Utiliza este formulario para editar un cliente </p>
        {cliente.nombre ?
         <Formulario
         cliente = {cliente}
         cargando = {cargando}
       />:
       <p>Cliente Id no valido</p>
      }
       
    </div>
  )
}

export default EditarCliente