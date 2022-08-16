import React from 'react'
import { Formik, Form, Field } from 'formik'
import {useNavigate} from 'react-router-dom'
import * as yup from 'yup'
import Alerta from './Alerta'

const Formulario = () => {
    const navigate = useNavigate()
    const handleSubmit = async (values)=>{
        try {
            const url = 'http://localhost:4000/clientes'
           const  respuesta = await fetch(url, {
                method:'POST',
                body:JSON.stringify(values),
                headers: {
                   "Content-Type": "application/json"
                }
            })
            console.log(respuesta)
            const resultado = await respuesta.json()
            console.log(resultado)
        } catch (error) {
            console.log(values)
        }
    }
    const nuevoClienteSchema = yup.object().shape({
        nombre:yup.string()
                            .min(3, 'El nombre es muy corto')
                            .max(40, 'El nombre es muy largo' )
                            .required('Este campo es requerido'),
        empresa: yup.string()
                            .required('Este campo es requerido'),
        email: yup.string()
                            .email('E-mail no valido')
                            .required('Este campo es requerido'),
        telefono: yup.number()
                        .positive('Numero')
                        .integer('Numero no valido')
                        .typeError('Numero no valido'),
        notas:'',

    })
  return (
    <div className=' bg-white mt-10  px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className=' text-gray-600 font-bold  text-xl uppercase text-center'>
            Agregar Clientes
        </h1>
        <Formik
            initialValues={{
                nombre:'',
                empresa:'',
                email:'',
                telefono:'',
                notas:'',
            }}
            onSubmit = { async(values, {resetForm})=>{
                await handleSubmit(values)
                resetForm()
                navigate('/clientes')
            }}
            validationSchema = {nuevoClienteSchema}
        >
            {
                ({errors, touched})=>{
                    console.log(errors)
                    return(
                    <Form>
                        <div className=' mt-4'>
                            <label htmlFor="nombre" className='text-gray-800'>
                                Nombre:
                            </label>
                            <Field
                                id = "nombre"
                                type = "text"
                                className= 'mt-2 block w-full p-3 bg-gray-50'
                                placeholder = "Nombre del cliente"
                                name = 'nombre' 
                            >
                            </Field>
                            {errors.nombre && touched.nombre ? (
                               <Alerta>{errors.nombre }</Alerta>
                            ): null}
                        </div>
                        <div className=' mt-4'>
                            <label htmlFor="empresa" className='text-gray-800'>
                                Empresa:
                            </label>
                            <Field
                                id = "empresa"
                                type = "text"
                                className= 'mt-2 block w-full p-3 bg-gray-50'
                                placeholder = "empresa del cliente"
                                name = 'empresa' 
                            >
                            </Field>
                            {errors.empresa && touched.empresa ? (
                               <Alerta>{errors.empresa }</Alerta>
                            ): null}
                        </div>
                        <div className=' mt-4'>
                            <label htmlFor="email" className='text-gray-800'>
                                E-mail:
                            </label>
                            <Field
                                id = "email"
                                type = "email"
                                className= 'mt-2 block w-full p-3 bg-gray-50'
                                placeholder = "Email del cliente"
                                name = 'email' 
                            >
                            </Field>
                            {errors.email && touched.email ? (
                               <Alerta>{errors.email }</Alerta>
                            ): null}
                        </div>
                        <div className=' mt-4'>
                            <label htmlFor="telefono" className='text-gray-800'>
                                Teléfono:
                            </label>
                            <Field
                                id = "telefono"
                                type = "tel"
                                className= 'mt-2 block w-full p-3 bg-gray-50'
                                placeholder = "telefono del cliente"
                                name = 'telefono' 
                            >
                            </Field>
                            {errors.telefono && touched.telefono ? (
                               <Alerta>{errors.telefono }</Alerta>
                            ): null}
                        </div>
                        <div className=' mt-4'>
                            <label htmlFor="notas" className='text-gray-800'>
                                Notas:
                            </label>
                            <Field
                                as = "textarea"
                                id = "notas"
                                type = "tel"
                                className= 'mt-2 block w-full p-3 bg-gray-50 h-40'
                                placeholder = "Notas del cliente"
                                name = 'notas' 
                            >
                            </Field>
                        </div>
                        <input type="submit" value="Agregar cliente"
                            className=' bg-blue-600 text-white p-3 rounded-md shadow-lg 
                            mt-5 w-full uppercase font-bold text-lg'
                        />
                    </Form>
                )
            }}
        </Formik>
    </div>
  )
}

export default Formulario