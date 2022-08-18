import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'

const VerCliente = () => {
    const {id} = useParams()
    const  [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
      
      const verCliente = async () =>{
        try {
          const url = `http://localhost:4000/clientes/${id}`
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
    Object.keys(cliente).length === 0 ? <p>No hay resultados</p> :(

    <div>
        {cargando ? <Spinner/>: (
          <>
            <h1 className=' text-4xl font-bold text-blue-600'>
              Ver cliente: {cliente.nombre}
            </h1>
            <p className='mt-5'> Visualiza los datos del cliente seleccionado </p>
            <p className=' text-2xl text-gray-700 mt-4'>
              <span className=' text-gray-700 uppercase font-bold '> Cliente: </span>
              {cliente.nombre}
            </p>
            <p className=' text-2xl text-gray-700 mt-4'>
              <span className=' text-gray-700 uppercase font-bold'> Telefono: </span>
              {cliente.telefono}
            </p>
            <p className=' text-2xl text-gray-700 mt-4'>
              <span className=' text-gray-700 uppercase font-bold'> Email: </span>
              {cliente.email}
            </p>
            <p className=' text-2xl text-gray-700 mt-4'>
              <span className=' text-gray-700 uppercase font-bold'> Empresa: </span>
              {cliente.empresa}
            </p>
            {cliente.nombre && (
              <p className=' text-2xl text-gray-700 mt-4'>
              <span className=' text-gray-700 uppercase font-bold'> notas: </span>
              {cliente.notas}
            </p>
            )}
          </>
        )}
       
    </div>
    )
  )
}

export default VerCliente