import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className=' bg-red-600 text-white font-bold p-4'>
        {children}
    </div>
  )
}

export default Alerta