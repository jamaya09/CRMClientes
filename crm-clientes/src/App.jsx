import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Incio from './paginas/Incio'
import NuevoCliente from './paginas/NuevoCliente'
import EditarCliente from './paginas/EditarCliente'




function App() {

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/clientes' element = {<Layout/>}>
              <Route index element = {<Incio/>}/>
              <Route path='nuevo' element= {<NuevoCliente/>}/>
              <Route path='editar:id' element = {<EditarCliente/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
// npm i tailwindcss postcss autoprefixer
//npx tailwindcss init -p
//npm i react-router-dom
//npm i  formik yup
