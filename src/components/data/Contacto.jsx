import React, { useState } from 'react'

const Contacto = () => {
    const [valores, setValores] = useState({
        nombre:"",
        email:"",
        telefono:""
    });
    




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviado", valores)

    }
    const handleValores = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className='container'>
            <h2 className='main-title'>Contacto</h2>
            <form className='formulario' onSubmit={handleSubmit}>
                <input
                type="text" 
                placeholder='ingresa tu nombre'
                value={valores.nombre}
                onChange={handleValores}
                name="nombre"
                />
                <input
                type="email"
                placeholder='ingresa tu email' 
                value={valores.email}
                onChange={handleValores}
                name="email"
                />
                <input
                type="phone"
                placeholder='ingresa tu telefono celular' 
                value={valores.telefono}
                onChange={handleValores}
                name="telefono"
                />
                <button className='enviar' type='submit'>Enviar</button>
            </form>

        </div>
    )
}

export default Contacto
