import React from 'react'
import {Outlet} from 'react-router-dom'
const IniciarSesion = () => {
  return (
    <div>
      <h1>desde Iniciar sesion</h1>
      <Outlet/>
    </div>
  )
}

export default IniciarSesion