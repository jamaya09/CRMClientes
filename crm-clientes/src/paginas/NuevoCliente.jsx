import React from 'react'
import Formulario from '../components/Formulario'

const NuevoCliente = () => {
  return (
    <>
       <h1 className=' text-4xl font-bold text-blue-600'>
          Agregar nuevo cliente
        </h1>
        <p className='mt-5'> Llevan los siguientes campos para registrar un cliente </p>
        <Formulario></Formulario>
    </>
   
  )
}

export default NuevoCliente