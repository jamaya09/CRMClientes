import {useNavigate} from 'react-router-dom'

const Cliente = ({cliente}) => {
    const {nombre, empresa, email,telefono,id}= cliente
    const navigate = useNavigate()
  return (
    <tr className=' border-b hover:bg-gray-50'>
        <td className='p-3'>{nombre}</td>
        <td className='p-3'>
            <p><span className=' text-gray-800 uppercase font-bold'>Email: </span>{email}</p>
            <p><span className=' text-gray-800 uppercase font-bold'>Teléfono: </span>{telefono}</p>
        </td>
        <td className='p-3'>{empresa}</td>
        <td className='p-3'>
        <button
                type='button'
                className='bg-yellow-600 hover:bg-yellow-700 p-1 uppercase text-white w-full font-bold block text-xs rounded-md'
                onClick={ ()=> navigate(`/clientes/${id}`)}
            >Ver </button>
            <button
                type='button'
                className='bg-blue-600 hover:bg-blue-700 p-1 uppercase text-white w-full font-bold block text-xs rounded-md mt-2'
                onClick={ ()=> navigate(`/clientes/editar/${id}`)}
            >Editar </button>
             <button
                type='button'
                className='bg-red-600 hover:bg-red-700 p-1 uppercase text-white w-full font-bold block text-xs rounded-md mt-2'
            >Eliminar </button>
        </td>
    </tr>
  )
}

export default Cliente