import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IniciarSesion from './layout/IniciarSesion'
import Layout from './layout/Layout'
import Incio from './paginas/Incio'
import LoginForm from './paginas/LoginForm'




function App() {

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element = {<IniciarSesion/>}>
              <Route index element = {<LoginForm/>}/>
            </Route>
            <Route path='/clientes' element = {<Layout/>}>
              <Route index element = {<Incio/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
// npm i tailwindcss postcss autoprefixer
//npx tailwindcss init -p
//npm i react-router-dom
