import {useState, useEffect} from 'react'
import Cliente from '../components/Cliente';

const Inicio = () => {
  const [clientes, setClientes] = useState([])
  useEffect(() => {
    const obtenerClientes = async ()=>{
        try {
          const url =  import.meta.env.VITE_URL
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()
          setClientes(resultado)
        } catch (error) {
          
        }
    }
    obtenerClientes()
  }, []);

  const handleEliminar = async (id)=>{
    const confirmar = confirm('¿Desea eliminar este cliente?')
    console.log(confirmar)
    if (confirmar){
      try {
        const url = `${import.meta.env.VITE_URL}/${id}`
        const respuesta = await fetch(url, {
          method:'DELETE'
        })
        const arrayClientes = clientes.filter( cliente => cliente.id !== id)
        setClientes(arrayClientes)
        await respuesta.json()
  
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
   <>
         <h1 className=' text-4xl font-bold text-blue-600'>
          Maestro de clientes
        </h1>
        <p className='mt-5'> Administra tus clientes </p>
        <table className='w-full mt-5 table-auto shadow bg-white'>
            <thead className='bg-blue-600 text-white'>
              <tr>
                  <th className='p-2'>Nombre </th>
                  <th className='p-2'>Contacto </th>
                  <th className='p-2'>Empresa </th>
                  <th className='p-2'>Acciones </th>
              </tr>
            </thead>
            <tbody>
              {clientes.map(cliente=>(
                  <Cliente
                  key={cliente.id}
                  cliente = {cliente}
                  handleEliminar = {handleEliminar}
                >
                </Cliente>
                )
              )}
            </tbody>
        </table>
   </>
  )
}

export default Inicio